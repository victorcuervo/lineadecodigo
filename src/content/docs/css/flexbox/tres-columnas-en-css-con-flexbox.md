---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USUICO2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnnihkGmdVXdIjDZgZYWox5t4pgprhN%2BmNmO3um5KiAIhANL%2FKGeM9Me9NmUsgU9FPssH8aaMsrJag4YFTNLXsi3sKv8DCFsQABoMNjM3NDIzMTgzODA1Igz2swxcDDNq03BunsIq3AMeZD9SJzjJ11QN%2BP9vYMJhpyAjtpQOrTw6VUm%2BNuU9EKW%2FnropMIjAr5NtXJt%2Bkw1Y09e1BUgtpf%2BgNUlYrJ1zfTtCl%2Fhqr8dGHuDYLvTtQriID3iZTYYriNujreR3vNtyMuCtXqlEmq8G1VkNJrZsPG6qx0DnOJxMydPxoAAQ7cz6G%2BQPmx%2FDanPCu5KIriqJcox8w71srypvhli6Ua%2F%2FzxchE9AwMh0mAz5L7AMZpeB%2BZkk5kjyllGhSfp2GXeKluHIV64eEwfz2wEj1853kjJkn3orzBrnnc1lBKpGLfriIcHy2PwNxlJTkL%2BMkGR6MeWeSbkom%2BbKQmzt%2BQ10ShgUs6xM4O8k4%2BM6yV8DZ%2FM3CosIy2OMgcuhpcWjSgOOBWVkALbeheIl18OEGYe22bAeaVnEROdP2t0wnpxo7vLz8BQet5zgI7%2BD5EkKzDdy2M6NO4%2BkjOauSeBarIVmz8QWV%2Fu364mF5INH3Tca%2Fzy3jSTUAXea5H3c72sp%2FDu56q039JZI6WXY%2B5NhUowWoqkcQcOUQ%2FtP9RwozmguwWcsHLqKa8yKWETpb6Sru6Ikx32Bd8tyb%2Fzx1OwHxj5nbdKbhitaQ6JrwcMflgXRMSF3wuCQCIsDL4IzpJzCH0MrJBjqkAQdNgpq2xXUAYmgfm8%2FKU7uwM2Bkp3tTR5TlMDqF5an3ZxCyBhZO8XMd5K%2BV2W8K3K20ZWRrJghFPznUFLEyoMYUyir2oiotJodLmwoGs85jBV8gK6nQBRTJzXyJDJ1jQkItYRx4MknJI2O7dyNPX3a%2Byrvks%2BsJYO1BhPmRZpuWZ%2BN%2FjONwGxh1oxeWM8OU6YvHh25ChIlqRMJBDb9AERKXkWDZ&X-Amz-Signature=dffd8cf29e6a600b2e1313f2b1642ce4f6a2bf3d0243ce8dd949d8bcc0850113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USUICO2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnnihkGmdVXdIjDZgZYWox5t4pgprhN%2BmNmO3um5KiAIhANL%2FKGeM9Me9NmUsgU9FPssH8aaMsrJag4YFTNLXsi3sKv8DCFsQABoMNjM3NDIzMTgzODA1Igz2swxcDDNq03BunsIq3AMeZD9SJzjJ11QN%2BP9vYMJhpyAjtpQOrTw6VUm%2BNuU9EKW%2FnropMIjAr5NtXJt%2Bkw1Y09e1BUgtpf%2BgNUlYrJ1zfTtCl%2Fhqr8dGHuDYLvTtQriID3iZTYYriNujreR3vNtyMuCtXqlEmq8G1VkNJrZsPG6qx0DnOJxMydPxoAAQ7cz6G%2BQPmx%2FDanPCu5KIriqJcox8w71srypvhli6Ua%2F%2FzxchE9AwMh0mAz5L7AMZpeB%2BZkk5kjyllGhSfp2GXeKluHIV64eEwfz2wEj1853kjJkn3orzBrnnc1lBKpGLfriIcHy2PwNxlJTkL%2BMkGR6MeWeSbkom%2BbKQmzt%2BQ10ShgUs6xM4O8k4%2BM6yV8DZ%2FM3CosIy2OMgcuhpcWjSgOOBWVkALbeheIl18OEGYe22bAeaVnEROdP2t0wnpxo7vLz8BQet5zgI7%2BD5EkKzDdy2M6NO4%2BkjOauSeBarIVmz8QWV%2Fu364mF5INH3Tca%2Fzy3jSTUAXea5H3c72sp%2FDu56q039JZI6WXY%2B5NhUowWoqkcQcOUQ%2FtP9RwozmguwWcsHLqKa8yKWETpb6Sru6Ikx32Bd8tyb%2Fzx1OwHxj5nbdKbhitaQ6JrwcMflgXRMSF3wuCQCIsDL4IzpJzCH0MrJBjqkAQdNgpq2xXUAYmgfm8%2FKU7uwM2Bkp3tTR5TlMDqF5an3ZxCyBhZO8XMd5K%2BV2W8K3K20ZWRrJghFPznUFLEyoMYUyir2oiotJodLmwoGs85jBV8gK6nQBRTJzXyJDJ1jQkItYRx4MknJI2O7dyNPX3a%2Byrvks%2BsJYO1BhPmRZpuWZ%2BN%2FjONwGxh1oxeWM8OU6YvHh25ChIlqRMJBDb9AERKXkWDZ&X-Amz-Signature=d03c8f8a0b2d300f1623697b4dd99b88aab93f7b8e51276352918cd5a92f776f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

