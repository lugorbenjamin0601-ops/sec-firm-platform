import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";

const REGION = "us-east-1"; 
const CLIENT_ID = "PENDIENTE_DE_CONFIGURAR_EN_AWS";

const client = new CognitoIdentityProviderClient({ region: REGION });

export async function protocoloDeAcceso(username, password) {
  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: CLIENT_ID,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const command = new InitiateAuthCommand(params);
    const response = await client.send(command);
    
    return { 
        exito: true, 
        token: response.AuthenticationResult.IdToken 
    };
  } catch (error) {
    return { 
        exito: false, 
        mensaje: "Acceso denegado. Credenciales no válidas en el sistema." 
    };
  }
}