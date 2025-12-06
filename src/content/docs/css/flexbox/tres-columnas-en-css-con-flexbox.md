---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVPD2VU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkqwSmNx43stzLB91ePuKELFqKYbVyCBd39qyl4yY4UAiAZkDuXwKQOEVHliOC7Qabjj0lGu%2FG%2FfqdqcE2Q6AeMsCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqZSflb7jMpdpGns7KtwDJq5LIvuYDS4qtMts7HUmFVhqFOlP8eLq1WqWpNXjBwF12mGNQJPJSTrvxFFcd075FeOJUIf4FRnSGjPpgjVR3e2z7PYXjXIlG%2Fuz7q%2Bos9RlEBQYT0L9MwDw8i43MMebxDxn3dy%2FR3jKD871NiggoyqyrrqaO6fTZJ5R3GWg05zgR8kG1WZLOrDYTqX%2FVuC5qFDA3QvXi60WeH7Db%2B%2Fa5YqogpSvLsiNUHJkyz0uBWXImFOCShC%2FOmTCnFdhtlaNAn14AsituGB8QAKL%2FviqBe%2FHmLPECyz82icI6280Vrzbk1jxcFdScPAA6fTORIR%2FvM6546%2BUgKRoO6xBITmf5qY%2FygoWpt9uEOddLZHOTvsLXb8%2FrZOPdDUOzWtJ0GCQ9uJP3UStVFmvZYXSUDhSU0WpdoawEjGpzmh275ShPTIb271N7al5ST440aps7%2BSdX6qjUijaa3HZAEgTJIxiAykrWg2ah2Lo%2FvMUxuNdMpT%2BC%2B%2BwFDthMmS6vNQ6cV2CriDsUuyrX6TzI8Z4GPOiySK6Yzz%2BVbx086li3k7m63IcoxuG96gyn25xl22Rs6r4eNTClBtiUOQpnhpldx47oi7V9%2FeM%2Fy1DF3qdLW6Iq45NdSb5CokZDODHsxMw1qbQyQY6pgGqOnufp2PoTB7hxeX1JsoNa9w0FExxsMGn6K52UcHp8uQbofJa2QVCwF15FYJde5FTEzag4cY8AVj5BPmqMsLRc8M%2BVOiuls9ZpugvM1RnBZzSeeLltKx71Lm1xqVoXVP0ouYtYSzgqxg3GWGnZr9n0%2FSR3RftaXg3zmPu1macIcOTxUopqjy%2BJWj5nw6mZs0uYACWC21G2hTAGJ9q2CFXHr5BnIvM&X-Amz-Signature=1eabd30a3215a8a7083f219b5dc8ab3b0249ada1a382d4ab5940987653db1593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVPD2VU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkqwSmNx43stzLB91ePuKELFqKYbVyCBd39qyl4yY4UAiAZkDuXwKQOEVHliOC7Qabjj0lGu%2FG%2FfqdqcE2Q6AeMsCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqZSflb7jMpdpGns7KtwDJq5LIvuYDS4qtMts7HUmFVhqFOlP8eLq1WqWpNXjBwF12mGNQJPJSTrvxFFcd075FeOJUIf4FRnSGjPpgjVR3e2z7PYXjXIlG%2Fuz7q%2Bos9RlEBQYT0L9MwDw8i43MMebxDxn3dy%2FR3jKD871NiggoyqyrrqaO6fTZJ5R3GWg05zgR8kG1WZLOrDYTqX%2FVuC5qFDA3QvXi60WeH7Db%2B%2Fa5YqogpSvLsiNUHJkyz0uBWXImFOCShC%2FOmTCnFdhtlaNAn14AsituGB8QAKL%2FviqBe%2FHmLPECyz82icI6280Vrzbk1jxcFdScPAA6fTORIR%2FvM6546%2BUgKRoO6xBITmf5qY%2FygoWpt9uEOddLZHOTvsLXb8%2FrZOPdDUOzWtJ0GCQ9uJP3UStVFmvZYXSUDhSU0WpdoawEjGpzmh275ShPTIb271N7al5ST440aps7%2BSdX6qjUijaa3HZAEgTJIxiAykrWg2ah2Lo%2FvMUxuNdMpT%2BC%2B%2BwFDthMmS6vNQ6cV2CriDsUuyrX6TzI8Z4GPOiySK6Yzz%2BVbx086li3k7m63IcoxuG96gyn25xl22Rs6r4eNTClBtiUOQpnhpldx47oi7V9%2FeM%2Fy1DF3qdLW6Iq45NdSb5CokZDODHsxMw1qbQyQY6pgGqOnufp2PoTB7hxeX1JsoNa9w0FExxsMGn6K52UcHp8uQbofJa2QVCwF15FYJde5FTEzag4cY8AVj5BPmqMsLRc8M%2BVOiuls9ZpugvM1RnBZzSeeLltKx71Lm1xqVoXVP0ouYtYSzgqxg3GWGnZr9n0%2FSR3RftaXg3zmPu1macIcOTxUopqjy%2BJWj5nw6mZs0uYACWC21G2hTAGJ9q2CFXHr5BnIvM&X-Amz-Signature=2ad54da831dc1f7bcc61a55a758cb6e723f52c1262d9bec267fd8d4ff2736a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

