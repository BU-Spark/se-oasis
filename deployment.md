# Deployment Overview

The Oasis Wellbeing application is deployed using the services provided by Google Cloud Platform(GCP). We are using two VMs to deploy each of the servers. One VM would host and deploy the backend server which is running Hapi.js with JavaScript. The other client server which is running the ReactJS server with TypeScript would be hosted and deployed in another VM. Since we are also using an event driver architecture, we would also be using Google Pub/Sub and Cloud Functions.

## Steps to Deploy

### Cloud Functions

The Cloud Functions are Event Listners which would be triggered when a message/event is published into a pub/sub Topic.

-   We can create our Cloud Event Listner as a normal npm project with a package.json and a script name called `start`
-   To deploy the cloud function, the following command needs to be run in the `gcloud shell`.

```shell
gcloud functions deploy YOUR_FUNCTION_NAME \
    [--gen2] \
    --region=YOUR_REGION \
    --runtime=YOUR_RUNTIME \
    --source=YOUR_SOURCE_LOCATION \
    --entry-point=YOUR_CODE_ENTRYPOINT \
    TRIGGER_FLAGS
```

**Please note**: The right triggers and configurations must be set to be able to deploy the cloud function successfully.

This is an example command which is used for the current project.

```shell
gcloud functions deploy <listnerName>
    --gen2
    --region=us-east4
    --runtime=nodejs18
    --memory=128Mi
    --trigger-topic=<topicName>
    --service-account spark-se-oasis-sa@se-oasis.iam.gserviceaccount.com
```

### HapiJS Backend Server

The HapiJS Backend Server as mentioned would be deployed into a Google Compute Engine with the port 5675 open for Ingress and Egress of requests. The below steps can be followed to be able to successfully deploy the code:

-   Once the server is complete and ready to be deployed, an optional step can be to test the server using docker containers.
-   Set up gcloud in the local terminal or log into the cloud shell to be able to run the below commands.

```shell
gcloud compute instances create oasis-server
    --project=se-oasis
    --zone=us-central1-a
    --machine-type=e2-medium
    --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default
    --metadata=startup-script=\#\!\ /bin/bash$'\n'sudo\ apt\ update$'\n'sudo\ apt\ -y\ upgrade$'\n'sudo\ apt-get\ update$'\n'sudo\ apt-get\ upgrade\ -y$'\n'sudo\ apt-get\ install\ -y\ ca-certificates\ curl\ gnupg$'\n'sudo\ mkdir\ -p\ /etc/apt/keyrings$'\n'curl\ -fsSL\ https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key\ \|\ sudo\ gpg\ --dearmor\ -o\ /etc/apt/keyrings/nodesource.gpg$'\n'echo\ \"deb\ \[signed-by=/etc/apt/keyrings/nodesource.gpg\]\ https://deb.nodesource.com/node_18.x\ nodistro\ main\"\ \|\ sudo\ tee\ /etc/apt/sources.list.d/nodesource.list$'\n'sudo\ apt-get\ update$'\n'sudo\ apt-get\ install\ nodejs\ -y$'\n'sudo\ apt\ install\ git\ -y$'\n'cd\ /home/ubuntu$'\n'sudo\ git\ clone\ https://github.com/BU-Spark/se-oasis.git$'\n'cd\ se-oasis/server$'\n'sudo\ rm\ package-lock.json$'\n'sudo\ npm\ install$'\n'export\ SERVER_HOST=0.0.0.0$'\n'export\ SERVER_PORT=5675$'\n'sudo\ npm\ install\ pm2\ -g$'\n'pm2\ start\ npm\ --name\ \"oasis-server\"\ --\ run\ prod$'\n'pm2\ save$'\n'pm2\ startup
    --maintenance-policy=MIGRATE
    --provisioning-model=STANDARD
    --service-account=spark-se-oasis-sa@se-oasis.iam.gserviceaccount.com
    --scopes=https://www.googleapis.com/auth/cloud-platform
    --tags=http-allow-5675,http-server,https-server
    --create-disk=auto-delete=yes,boot=yes,device-name=oasis-server,image=projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20231213,mode=rw,size=10,type=projects/se-oasis/zones/us-central1-a/diskTypes/pd-balanced --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --labels=goog-ec-src=vm_add-gcloud --reservation-affinity=any
```

**Please note**: Add the service account and network tags which has been created with the right permissions and allow

-   Once this command is run, we would need a Static IP address which needs to be assigned to this VM.

> To create a new IP address

```shell
    gcloud compute addresses create oasis-server-ip-address --region=us-central1
```

> To describe the IP address

```shell
    gcloud compute addresses describe oasis-server-ip-address
```

Note the IP address which is shown as the output of the above command

> Delete the current External NAT is added to the Compute Engine

```shell
    gcloud compute instances delete-access-config oasis-server \
        --access-config-name="External NAT" \
        --zone=us-central1-a
```

> Add the newly created IP address

```shell
    gcloud compute instances add-access-config backend-instance \
        --access-config-name="External Static IP" --address=<new-static-ip-address> \
        --zone=us-central1-a
```

-   Once the whole system is setup and the startup script has had some time to complete, shh into the VM to check the status of the server using the command `pm2 status`.
