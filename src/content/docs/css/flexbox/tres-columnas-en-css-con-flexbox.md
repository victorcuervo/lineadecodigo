---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHK3HM42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4F2VCAN2eVTbDixQ55IoV%2BIRTOFQOe%2FZMsTntAYPJNAiAseOCVsUyBBLeiiOqT2ppCRb9so7F2FGl4Qd%2BY6fOlSiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS21Reb8xfn6ahb02KtwDO08YfNZpruPUW7LKdTxXiSt%2FCtN5WcUyg8dQl%2BwfCGzZ7PR%2FX3rHMlyN1FddR0H2gplFVqllx2c%2B%2Bw06N%2FCvNAMT5gQaVJutpHgcpgdakOkkflzcTewFjFB%2FM3NgXUTLBbeFojr0kgYM%2F4XKaF2SijXTv3Vvs6Mzd2dFc3GaxXSZI6e%2Bjydx6U0oSzqtUjznvEj%2B5TeadmnjJzd7WZoGWgtHXuXpYEoOmyO9ZszO4iPBoPhpk403O%2BQuRRuuYt5R8vEMY8cSaB8QZK56zt%2BKEAWXgt3PEmq70JzTY0lW9lsFfTcewKV8LVX5WmLxGx9%2BaN0DmwttdRFwZevZFONUXFf8XIcU%2FcgUiL6qgWHUIB2bRqAz5nStzTZqT3pvGtdCqOi2UKKsntQb2O2YipBDyOOuG7ZAJOX%2Fs8L59FvnE5DmOuxkTIsLdbeNIJMkmiG8tySzEQmQfTzYSVgOP8GjZ7hAse1jtIZM7b%2FM1%2F%2BSFfwA6rryAI6v3MT2Kg8QxZHS1YUlAYvQa%2BOwle4KW24CZm9WijHEvzkY%2FMZDupJfq2H5HlM5jlYjBswYs9Zq267hUR36bKuAngihpOoqulT4lD2360MD64TktG6rm05Z3AcEZqOvEa0C3iX8E%2FEw2P3SyQY6pgEE%2BFCMhQf33IzWufo%2BtawMwfetWHW3VkW%2Ft3BglaMXCGAj6jyfYNyiRSoh3tZkaymbkHTOyMYYjUZG8UT7WNgWq9lWab%2B3mNE8B%2Btc3vLUy993R1haPy11kq8BSUqrQdaaeCUjf8XXBXflmPFqzHao5FPDIicho57DUNtljGM%2B6Yj3S%2BA6e4iDU%2BiPKYSGOnP6Vy5UFoEmKM4JIR1zW6Y%2B1x9MpR%2BV&X-Amz-Signature=ab98d8657a48ffd940824078e52d05acaaf3e91caa1e3456be36d1d8f2a956fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHK3HM42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4F2VCAN2eVTbDixQ55IoV%2BIRTOFQOe%2FZMsTntAYPJNAiAseOCVsUyBBLeiiOqT2ppCRb9so7F2FGl4Qd%2BY6fOlSiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS21Reb8xfn6ahb02KtwDO08YfNZpruPUW7LKdTxXiSt%2FCtN5WcUyg8dQl%2BwfCGzZ7PR%2FX3rHMlyN1FddR0H2gplFVqllx2c%2B%2Bw06N%2FCvNAMT5gQaVJutpHgcpgdakOkkflzcTewFjFB%2FM3NgXUTLBbeFojr0kgYM%2F4XKaF2SijXTv3Vvs6Mzd2dFc3GaxXSZI6e%2Bjydx6U0oSzqtUjznvEj%2B5TeadmnjJzd7WZoGWgtHXuXpYEoOmyO9ZszO4iPBoPhpk403O%2BQuRRuuYt5R8vEMY8cSaB8QZK56zt%2BKEAWXgt3PEmq70JzTY0lW9lsFfTcewKV8LVX5WmLxGx9%2BaN0DmwttdRFwZevZFONUXFf8XIcU%2FcgUiL6qgWHUIB2bRqAz5nStzTZqT3pvGtdCqOi2UKKsntQb2O2YipBDyOOuG7ZAJOX%2Fs8L59FvnE5DmOuxkTIsLdbeNIJMkmiG8tySzEQmQfTzYSVgOP8GjZ7hAse1jtIZM7b%2FM1%2F%2BSFfwA6rryAI6v3MT2Kg8QxZHS1YUlAYvQa%2BOwle4KW24CZm9WijHEvzkY%2FMZDupJfq2H5HlM5jlYjBswYs9Zq267hUR36bKuAngihpOoqulT4lD2360MD64TktG6rm05Z3AcEZqOvEa0C3iX8E%2FEw2P3SyQY6pgEE%2BFCMhQf33IzWufo%2BtawMwfetWHW3VkW%2Ft3BglaMXCGAj6jyfYNyiRSoh3tZkaymbkHTOyMYYjUZG8UT7WNgWq9lWab%2B3mNE8B%2Btc3vLUy993R1haPy11kq8BSUqrQdaaeCUjf8XXBXflmPFqzHao5FPDIicho57DUNtljGM%2B6Yj3S%2BA6e4iDU%2BiPKYSGOnP6Vy5UFoEmKM4JIR1zW6Y%2B1x9MpR%2BV&X-Amz-Signature=de57ba3711acf5b5f0e8ad3ea2ab81aab5792e8a9606deb67b38dc95ceec5ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

