/* eslint-disable prettier/prettier */
export const routes = [
  {
    title:"1xx: Informational (Informativos)",
    label: "Tipos de Codigo 1xx",
    url: "Code100",
    text: "Los códigos de estado 1xx indican que la solicitud ha sido recibida y el proceso continúa. Son respuestas intermedias y no se usan comúnmente en aplicaciones web estándar."
  },
  {
    title:"2xx: Success (Éxito)",
    label: "Tipos de Codigo 2xx",
    url: "Code200",
    text: "Los códigos de estado 2xx indican que la solicitud fue recibida, entendida y procesada correctamente por el servidor."
  },
  {
    title:"3xx: Redirection (Redirección)",
    label: "Tipos de Codigo 3xx",
    url: "Code300",
    text: "Los códigos de estado 3xx indican que se necesita una acción adicional por parte del cliente para completar la solicitud. Generalmente implican una redirección."
  },
  {
    title:"4xx: Client Error (Errores del Cliente)",
    label: "Tipos de Codigo 4xx",
    url: "Code400",
    text: "Los códigos de estado 4xx indican que hay un error en la solicitud enviada por el cliente. Estos errores son el resultado de errores de los usuarios al solicitar recursos."
  },
  {
    title:"5xx: Server Error (Errores del Servidor)", 
    label: "Tipos de Codigo 5xx",
    url: "Code500",
    text: "Los códigos de estado 5xx indican que el servidor ha fallado al cumplir con una solicitud aparentemente válida. Son problemas que deben ser resueltos por los administradores del servidor."
  },
];
export const codes = {
  code100: [
    {
        title: "100 Continue", 
        url: "https://http.cat/100",
        text:"\nDescripción: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud (si lo hay).\n\nUso común: Se utiliza principalmente en el protocolo HTTP/1.1 para gestionar grandes volúmenes de datos enviados por el cliente, permitiendo una verificación inicial antes de enviar el contenido completo.\n"
    },
    {
        title: "101 Switching Protocols", 
        url: "https://http.cat/101",
        text:"\nDescripción: El servidor acepta cambiar a un protocolo diferente solicitado por el cliente a través del encabezado Upgrade.\n\nUso común: Es útil cuando se necesita cambiar a un protocolo más avanzado, como cambiar de HTTP a WebSocket.\n"
    },
  ], 
  code200:[
    {
      title:"200 OK",
      url:"https://http.cat/200",
      text:"\n Descripción: La solicitud ha tenido éxito.\n\nUso común:\n-GET: El recurso solicitado se ha recuperado y se transmite en el cuerpo del mensaje.\n-POST: El recurso que describe el resultado de la acción se transmite en el cuerpo del mensaje.\n"
    }, 
    {
      title:"201 Created", 
      url:"https://http.cat/201", 
      text:"\nDescripción: La solicitud ha sido exitosa y como resultado se ha creado un nuevo recurso.\n\nUso común: Suele ir acompañado de un encabezado Location que contiene la URL del nuevo recurso.\n"
    },
    {
      title:"204 No Content",
      url:"https://http.cat/204",
      text:"Descripción: La solicitud ha tenido éxito, pero no hay contenido que enviar en la respuesta.\n\nUso común: Común en operaciones de actualización donde no se necesita una respuesta adicional.\n"
    },
  ],
  code300:[
    {
      title:"301 Moved Permanently",
      url:"https://http.cat/301",
      text:"\nDescripción: El recurso solicitado se ha movido permanentemente a una nueva URL.\n\nUso común: El cliente debe usar la URL proporcionada en futuras solicitudes. Los motores de búsqueda actualizarán sus enlaces a esta nueva ubicación.\n"
    },
    {
      title:"302 Found",
      url:"https://http.cat/302",
      text:"\nDescripción: El recurso solicitado se encuentra temporalmente en una URL diferente.\n\nUso común: Aunque la URL actual del recurso puede cambiar en el futuro, el cliente debe continuar utilizando la URL original para futuras solicitudes.\n"
    },
    {
      title:"304 Not Modified",
      url:"https://http.cat/304",
      text:"\nDescripción: El recurso no ha sido modificado desde la última solicitud del cliente.\n\nUso común: El servidor no devuelve el cuerpo del recurso y el cliente puede utilizar la versión en caché del recurso.\n"
    },
  ], 
  code400:[
    {
      title:"400 Bad Request",
      url:"https://http.cat/400",
      text:"\nDescripción: La solicitud del cliente es inválida o malformada.\n\nUso común: El servidor no puede procesarla debido a un error del cliente, como sintaxis incorrecta o datos inválidos.\n"
    },
    {
      title:"401 Unauthorized",
      url:"https://http.cat/401",
      text:"\nDescripción: La solicitud requiere autenticación.\n\nUso común: El cliente debe autenticarse para obtener la respuesta solicitada. Suele ir acompañado de un encabezado WWW-Authenticate que describe cómo realizar la autenticación.\n"
    },
    {
      title:"403 Forbidden",
      url:"https://http.cat/403",
      text:"\nDescripción: El servidor entiende la solicitud, pero se niega a autorizarla.\n\nUso común: El cliente no tiene permiso para acceder al recurso, incluso si está autenticado.\n"
    },
    {
      title:"404 Not Found",
      url:"https://http.cat/404",
      text:"\nDescripción: El servidor no puede encontrar el recurso solicitado.\n\nUso común: Esto puede deberse a una URL incorrecta o a que el recurso no existe.\n"
    }
  ], 
  code500:[
    {
      title:"500 Internal Server Error",
      url:"https://http.cat/500",
      text:"\nDescripción: El servidor encontró una condición inesperada que le impide cumplir con la solicitud.\n\nUso común: Es un error genérico que no ofrece detalles específicos sobre el problema.\n"
    },
    {
      title:"502 Bad Gateway",
      url:"https://http.cat/502",
      text:"\nDescripción: El servidor, actuando como puerta de enlace o proxy, recibió una respuesta inválida del servidor de origen.\n\nUso común: Esto suele ocurrir cuando hay problemas de comunicación entre servidores.\n"
    },
    {
      title:"503 Service Unavailable",
      url:"https://http.cat/503",
      text:"\nDescripción: El servidor no está disponible temporalmente, generalmente debido a mantenimiento o a una sobrecarga.\n\nUso común: El encabezado Retry-After puede proporcionar información sobre cuándo estará disponible el servicio nuevamente.\n"
    },
    {
      title:"504 Gateway Timeout",
      url:"https://http.cat/504",
      text:"\nDescripción: El servidor, actuando como puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor de origen.\n\nUso común: Esto indica que el servidor de origen no ha respondido dentro del tiempo permitido.\n"
    }
  ]
}
