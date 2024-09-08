import {
    AttributeIds,
    MessageSecurityMode,
    OPCUAClient,
    SecurityPolicy,
  } from "node-opcua-client";

const connectionStrategy = {
initialDelay: 1000,
maxRetry: 1
};

const client = OPCUAClient.create({
    applicationName: "MyClient",
    connectionStrategy: connectionStrategy,
    securityMode: MessageSecurityMode.None,
    securityPolicy: SecurityPolicy.None,
    endpointMustExist: false
  });
  //const endpointUrl = "opc.tcp://opcuademo.sterfive.com:26543";
const endpointUrl = "opc.tcp://192.168.116.129:4840";

//export temperatures for display
export const temperatures = [];

async function main() {
    try {
      // connect to server
      await client.connect(endpointUrl);
      console.log("connected !");
    
      // createSession
      const session = await client.createSession();
      console.log("session created !");
  
      // read a variable with readVariableValue
      const maxAge = 0;
      const nodeToRead = {
        nodeId: "ns=3;s=Scalar_Simulation_String",
        attributeId: AttributeIds.Value
      };
      const dataValue = await session.read(nodeToRead, maxAge);
      console.log(" value ", dataValue.toString());
      temperatures.push(dataValue.value.value);
      console.log(temperatures);

      // close session
      await session.close();
  
      // disconnecting
      await client.disconnect();
      console.log("done !"); 

    } catch(err) {
      console.log("An error has occurred : ",err);
    }
  }
  main();
  