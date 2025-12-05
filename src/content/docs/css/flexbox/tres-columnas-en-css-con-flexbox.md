---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NL7HCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtg6B4DAH9clzwxYvw73SHVmp0%2FEl2oyiZnVzXuoe5GAIhAJ5qtcsMhgDrRSsCDFANtNdLVE78sH63iBbzxmNn4z0CKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEO2ch7RXm2sbRUf0q3AM6vbvw%2FIPFOHmMpbbd3IO8UU43iJoLAn%2F8gUSvzcIEvwNciK9iwvqIYHhVdUWht5UwqvOx9pOM0z55Ve30Xm4pZMsnbHXC78z2gLAGqC2ZK3sjL8w6Y3EJfMDkOSrmOi36DlBx3577Rzlst6F4ltBqeuzBXuzB7sKcpgHTWezzhmBWYt0iaRg9rUh9EWQ4AvN9iHwrAytGW%2BaNlLx7bRlu8LF2cFam3hJcK5LurTsClijeZVaH9cNnlDf97JGbwPGSnQjauJQHRX05r%2FXtC42Vu8Pgb%2FiIauw%2FizNy95tPeQcuvDj72Pphy5dSky3Xz1zmaDYMF38a05KS11GZRowJLYTQ7jDhaVqJjjkyGaVJZgTbjoNqYvWawKxH8QqDeb06NQZ2zbR%2BnbyP3VjbXYOKewrbPzqgoWpGOSaOkUnIDlRA96fsP3jj51SsY5Kf7M8PxTmPB5aase8s5I7zmmICwFCn1F7nBS0iCXotPFng7oTJFyVksPCe9uHEdUALn8pv8SYoqkDcM3PFCJ0Nsrq2k40E79w6TUBK1Y4ilsuP9zWF97ZGoJuQeVw4%2F8D7ZjGUVghzoQZx%2F2rrfnAS2U5MtJQHGGPfQxE12x%2FVxdJkPHlXszOtHJE2QPHYLTCL88vJBjqkAY3SIEoo7ej6QJLei3bi6Vb%2BJbDNMaq8zsiDHDtCKVTuiXpo8ac9m4PLtSAck5V2HS6DD4zA8IfVf%2Fcc3qxvYUCgEgD45FuJ58257RGidWjkyqrOQcX%2B5EVvQYmZM2VNhvWgR1j6LXsUaCudOGvDdBHujnJnmOjl9EHTMxFyHi2NckweAH2JAD0xqCWAgNFZxaUTmPIbdkbHP0kKf%2Bz%2F6sGGaXGP&X-Amz-Signature=02d2dca48ab64f1d45fdcb09c2be839857366e860b915b55d6a4e10527b65daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NL7HCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtg6B4DAH9clzwxYvw73SHVmp0%2FEl2oyiZnVzXuoe5GAIhAJ5qtcsMhgDrRSsCDFANtNdLVE78sH63iBbzxmNn4z0CKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEO2ch7RXm2sbRUf0q3AM6vbvw%2FIPFOHmMpbbd3IO8UU43iJoLAn%2F8gUSvzcIEvwNciK9iwvqIYHhVdUWht5UwqvOx9pOM0z55Ve30Xm4pZMsnbHXC78z2gLAGqC2ZK3sjL8w6Y3EJfMDkOSrmOi36DlBx3577Rzlst6F4ltBqeuzBXuzB7sKcpgHTWezzhmBWYt0iaRg9rUh9EWQ4AvN9iHwrAytGW%2BaNlLx7bRlu8LF2cFam3hJcK5LurTsClijeZVaH9cNnlDf97JGbwPGSnQjauJQHRX05r%2FXtC42Vu8Pgb%2FiIauw%2FizNy95tPeQcuvDj72Pphy5dSky3Xz1zmaDYMF38a05KS11GZRowJLYTQ7jDhaVqJjjkyGaVJZgTbjoNqYvWawKxH8QqDeb06NQZ2zbR%2BnbyP3VjbXYOKewrbPzqgoWpGOSaOkUnIDlRA96fsP3jj51SsY5Kf7M8PxTmPB5aase8s5I7zmmICwFCn1F7nBS0iCXotPFng7oTJFyVksPCe9uHEdUALn8pv8SYoqkDcM3PFCJ0Nsrq2k40E79w6TUBK1Y4ilsuP9zWF97ZGoJuQeVw4%2F8D7ZjGUVghzoQZx%2F2rrfnAS2U5MtJQHGGPfQxE12x%2FVxdJkPHlXszOtHJE2QPHYLTCL88vJBjqkAY3SIEoo7ej6QJLei3bi6Vb%2BJbDNMaq8zsiDHDtCKVTuiXpo8ac9m4PLtSAck5V2HS6DD4zA8IfVf%2Fcc3qxvYUCgEgD45FuJ58257RGidWjkyqrOQcX%2B5EVvQYmZM2VNhvWgR1j6LXsUaCudOGvDdBHujnJnmOjl9EHTMxFyHi2NckweAH2JAD0xqCWAgNFZxaUTmPIbdkbHP0kKf%2Bz%2F6sGGaXGP&X-Amz-Signature=d1fb76a7706fee241343b98d45a432a053c3a26c3fa351adbb8c11782eface7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

