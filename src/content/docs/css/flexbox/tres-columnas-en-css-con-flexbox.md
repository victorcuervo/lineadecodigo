---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCUBGY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqM%2BURTTiJkqM6Y9nTH3Cz8uTKpyqyXeyPDvpI3KvD9AiEAtXfCBfu%2FEwDz6c7QYCKkNWPqOJG2rkUm98gX0sSS3I8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMmZoFtOn76XR%2F3WCrcA9OnJfAYkamd5x98ssVHfbZvIUD16yQMGm7KkSJzrAyDy5%2FMqZ7nh8D0ugIKuuq6kB4QYZbRvQJlivJBSCRd66zBjqYsB2X%2BXYjoc93S3gKcPo%2B8dZgFgiCDR0j6iGUw5w9dfrtqCdzdKSfX3cKeuL6mKbSc6omMK1RnO4aKTB964ls0oqiAWZ2ujwIBELJZLV8q5tp7L9Qh7fKirVRx95otZZDNxUSkla0a6ueiTCLkPW7%2BAcOVeRmSZEcj7oDCZ9Td1JpSz7C2Us1QCL7%2BCYNJh3WjTeVqoN4V28sHohxa1EEyCiQl3I1E3ksletHbLtx7pMBTr1fIC%2F5O25bE3%2FcZy1OnIaFqsM%2FlO%2B0DQR7hmS9DNYig14etk6gurCu3htGZmQ03U2NVwn88wnNg8qttxbuP7KjjceF2CcHdQLdaLDBJ6eMFAG2u0vv1Mumgmng4UF1F%2Fk8apM1uFs2fasivpnBr%2ByxVmD89W%2Fn0Rz%2BE6w7Gz1OnO3ik6hUOIn4IaxJ1UNKEPvaHeADalCPD%2F1Bhpk9D%2BGe5dGBpdWWn7LrX0jJFiZQSRYI6clOn6lDblAPIYzZAChnDS5KT7%2FDrcsIDSfir2QEqphuRKd%2FVmp2Z0ke%2BuZodTJv%2BZh4pMPTH18kGOqUBoFtU9mVGNveVR3D0bODPu12MZ5aBe%2B8h5fVoCyqo1DMQoAiH31C3lY%2Bb8Xf5LsceWTZaAnJj9pECqjSaB4oR9uRy3HyLcOyu%2BK8ew3h6s4nUR9Pyaqw7Le95KmBfqW5ekOgAaCOZT8mf%2Bbl%2FzkGTzd5F0xTcGGCAs8MMEtX6a3L8bmwKY%2FjoxGbSQXxIInyj7VUZoXLEqdf7vZVyYpHgpxnHvydC&X-Amz-Signature=45eb2b9d6204dc98974e5f8ff3a5b040ddbe02d7cb04e9f8076d1f229881122c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCUBGY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqM%2BURTTiJkqM6Y9nTH3Cz8uTKpyqyXeyPDvpI3KvD9AiEAtXfCBfu%2FEwDz6c7QYCKkNWPqOJG2rkUm98gX0sSS3I8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMmZoFtOn76XR%2F3WCrcA9OnJfAYkamd5x98ssVHfbZvIUD16yQMGm7KkSJzrAyDy5%2FMqZ7nh8D0ugIKuuq6kB4QYZbRvQJlivJBSCRd66zBjqYsB2X%2BXYjoc93S3gKcPo%2B8dZgFgiCDR0j6iGUw5w9dfrtqCdzdKSfX3cKeuL6mKbSc6omMK1RnO4aKTB964ls0oqiAWZ2ujwIBELJZLV8q5tp7L9Qh7fKirVRx95otZZDNxUSkla0a6ueiTCLkPW7%2BAcOVeRmSZEcj7oDCZ9Td1JpSz7C2Us1QCL7%2BCYNJh3WjTeVqoN4V28sHohxa1EEyCiQl3I1E3ksletHbLtx7pMBTr1fIC%2F5O25bE3%2FcZy1OnIaFqsM%2FlO%2B0DQR7hmS9DNYig14etk6gurCu3htGZmQ03U2NVwn88wnNg8qttxbuP7KjjceF2CcHdQLdaLDBJ6eMFAG2u0vv1Mumgmng4UF1F%2Fk8apM1uFs2fasivpnBr%2ByxVmD89W%2Fn0Rz%2BE6w7Gz1OnO3ik6hUOIn4IaxJ1UNKEPvaHeADalCPD%2F1Bhpk9D%2BGe5dGBpdWWn7LrX0jJFiZQSRYI6clOn6lDblAPIYzZAChnDS5KT7%2FDrcsIDSfir2QEqphuRKd%2FVmp2Z0ke%2BuZodTJv%2BZh4pMPTH18kGOqUBoFtU9mVGNveVR3D0bODPu12MZ5aBe%2B8h5fVoCyqo1DMQoAiH31C3lY%2Bb8Xf5LsceWTZaAnJj9pECqjSaB4oR9uRy3HyLcOyu%2BK8ew3h6s4nUR9Pyaqw7Le95KmBfqW5ekOgAaCOZT8mf%2Bbl%2FzkGTzd5F0xTcGGCAs8MMEtX6a3L8bmwKY%2FjoxGbSQXxIInyj7VUZoXLEqdf7vZVyYpHgpxnHvydC&X-Amz-Signature=82ecf47037c8f8ea78ad362bf262759ce360158b1d1f99c3b74b8774ef9b1055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

