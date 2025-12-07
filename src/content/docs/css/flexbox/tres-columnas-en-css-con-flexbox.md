---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55XMV5L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCoSvIY2V0TXHlUdY%2FBcdMRhyMPenf1SLjuM2BXtWqEQIhAIuyxqS%2FBHWuIuGM6A0jV8QQkmyvQaFPL79ySzxuaKMhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiUO89O6PqyE5FsC4q3AMlDp9wni09U4RBSX9JYtLlHZyvgo3O9PcleYWoyo2%2BoIVhpq7BdjM73NNuc1yDFPyE1O75avsSn2lM1eFT0qg8cbCnC61LcbiOymLBSD9W7nRfhyBzWtRR0D9Aaz5a2zF8cdZszyUGiHy0ZLmmjfnMGqTdUJu3eSkuFgjLJJPayNR64XGnaYnhDcpPJmSqAOD57aRnQACd5mgQQyXDUsxM4oX%2BX%2FEKTH%2Fn0g6xLzxKsO%2By7UyraaatuwUEYenSW99Ei7kDE0nZdKhNeQG16Q5N%2BjCY2x%2FWChHjWjVnnUPVxRETUxwtKi5aC7LkdWlb76CLIYkhMGrFsNSZu14ys6kpF%2BS22GdPQY7BGp8mwvpv%2Fu15J4WK5r3OQJVUIv0GLtKPcoEKUUPIPoGnjleHfHJkC0GOtN8rds59s%2FRZTAwseMa0X%2FY1cdiSIF6faeThDvWE9u1gqvex9lcQRiTmelTGLzLjopbI0kRummq7DciQPvhg8yZ8D4yW19hzze7eDoytAaocA5SHtDFDGA6BbMuLiD9yocgPTXwRrtBCXEQzS0GkxPetnK2NVoBa98K6Ks9PQNg5D2KAdMyuj04ecdRojbH3FY6%2BJrWZJtyUwavXJL2VrTt6p%2FYFJ80ZtDDMmtXJBjqkAY9Kl35LlX4ihxb29%2BvpmHmHxSpvJEv0b3md4PxidZNjc8vT0zJ0COKU5Khv6UDGnkKxwroNOxfuKuIEC3rMapcqfz3%2FY0jDdVPyEMsCeqaBYoPMGg2NCDVHYXcQ4woDPwBx8SipLFcrMXWWBtpekGoqMoVgAEY6g52%2BFLdNv70H%2BJ9GbccAleO72uZa8ostldGXcxHFqRSXLP21YVVSonhyClS%2F&X-Amz-Signature=a33852e7e6a90440252f3652630180ac5b7dc67aaf783e0bd654358eee619511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55XMV5L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCoSvIY2V0TXHlUdY%2FBcdMRhyMPenf1SLjuM2BXtWqEQIhAIuyxqS%2FBHWuIuGM6A0jV8QQkmyvQaFPL79ySzxuaKMhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiUO89O6PqyE5FsC4q3AMlDp9wni09U4RBSX9JYtLlHZyvgo3O9PcleYWoyo2%2BoIVhpq7BdjM73NNuc1yDFPyE1O75avsSn2lM1eFT0qg8cbCnC61LcbiOymLBSD9W7nRfhyBzWtRR0D9Aaz5a2zF8cdZszyUGiHy0ZLmmjfnMGqTdUJu3eSkuFgjLJJPayNR64XGnaYnhDcpPJmSqAOD57aRnQACd5mgQQyXDUsxM4oX%2BX%2FEKTH%2Fn0g6xLzxKsO%2By7UyraaatuwUEYenSW99Ei7kDE0nZdKhNeQG16Q5N%2BjCY2x%2FWChHjWjVnnUPVxRETUxwtKi5aC7LkdWlb76CLIYkhMGrFsNSZu14ys6kpF%2BS22GdPQY7BGp8mwvpv%2Fu15J4WK5r3OQJVUIv0GLtKPcoEKUUPIPoGnjleHfHJkC0GOtN8rds59s%2FRZTAwseMa0X%2FY1cdiSIF6faeThDvWE9u1gqvex9lcQRiTmelTGLzLjopbI0kRummq7DciQPvhg8yZ8D4yW19hzze7eDoytAaocA5SHtDFDGA6BbMuLiD9yocgPTXwRrtBCXEQzS0GkxPetnK2NVoBa98K6Ks9PQNg5D2KAdMyuj04ecdRojbH3FY6%2BJrWZJtyUwavXJL2VrTt6p%2FYFJ80ZtDDMmtXJBjqkAY9Kl35LlX4ihxb29%2BvpmHmHxSpvJEv0b3md4PxidZNjc8vT0zJ0COKU5Khv6UDGnkKxwroNOxfuKuIEC3rMapcqfz3%2FY0jDdVPyEMsCeqaBYoPMGg2NCDVHYXcQ4woDPwBx8SipLFcrMXWWBtpekGoqMoVgAEY6g52%2BFLdNv70H%2BJ9GbccAleO72uZa8ostldGXcxHFqRSXLP21YVVSonhyClS%2F&X-Amz-Signature=32d7a232d02a3739c0b41929bbb6ffe343fbe7455c5fbe0033e30aa58d1e341f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

