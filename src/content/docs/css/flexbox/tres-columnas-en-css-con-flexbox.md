---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YST27IW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWwukdDhS6yg%2BOnBxDNXylR5uHlbVcFD6QRsepODQxQwIgKUZ2ExEl%2Ba70kznlqy4i7YDxB%2FNazH4wBRmbQG4G%2B5Aq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPGuJfSCiISGj5MG9ircA0I47%2BgfodIsCUVbpU6AcVfpdwtGm8SRXtxWpe77ZCzTzLZvz4FeEXBwEWNmNAdVar0sFEAOpfZRhLyMsA%2F0JLoodU5JKJ6DBK6P%2Fmbut0iTzU%2FYR9RLeAMFcGyrSRzjeTbDuFjzXPW3TCgtx8ErTEuyFCMbj2nLdhPD8%2Ftpk6Mja%2BbOs1UdHZltBrGLpQwxh4EuTVbvvbmeKxgy3Fv%2FVXVSR4COhqUuBnVwJc093QZVSnYMKkvZBt1h4tCtvM1XkRW56Vq5TProObkqArrjK1NDu0ErvaK4gJqA4v6l3Z0dcuntQmtdB6WgRf%2FnVHPymdvSJaDg8MCHE%2FDGi%2FoQmvhmmuDJHlvJcb5V7DJ8e%2BjrG%2FqcWu%2FDGcBAI7FM4k64p0g79ClIdoschAleeBcj5vrRtPJX%2FyHRQovHWFbGIM1VkYR67EZhlOhaLNuGiBJ4Dup17hPNRfZewHyq46rxceYhLFRjKTRyDTRZJ6R2FU5701tE0s1ZHp1oUbKj%2BZFiyyb0YsT6bJw1Nhc8z3kpH6DaEdC%2FgvaUo7YiGhikisKi1SOqzAekBzPye7k57eb4ROS8xNS48CtHEYxbXQV0gOf43reKfhe6U6%2FDFrwlRxCo2gC0ieADxI9Uv82GMJSozskGOqUBa512nDduJNPWRRxw%2BNE0k%2FN%2FzZOcUIZxMNXBA4F1tYQ5wYfh7UpST7egkY7gedAZUtkRRXTLW09BJiuJLzpmxe3KsmC%2FKT%2FsTLlNLJncNT%2B%2BWSvkxJC9MiOQlVEYZTIszBaat1cPKCtc4soqeaigXgW8F1Rl5rAh%2BKhQ4O%2BfdN1LhidA9A8wkJl9oOabPPTCsIU4ctqxdKmZqmxAL95I9JkT2USq&X-Amz-Signature=c89475bf4aef48bd0626a4f6151ec973fb7d3c9c60c0aaf5c8252b8bc7d59cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YST27IW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWwukdDhS6yg%2BOnBxDNXylR5uHlbVcFD6QRsepODQxQwIgKUZ2ExEl%2Ba70kznlqy4i7YDxB%2FNazH4wBRmbQG4G%2B5Aq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPGuJfSCiISGj5MG9ircA0I47%2BgfodIsCUVbpU6AcVfpdwtGm8SRXtxWpe77ZCzTzLZvz4FeEXBwEWNmNAdVar0sFEAOpfZRhLyMsA%2F0JLoodU5JKJ6DBK6P%2Fmbut0iTzU%2FYR9RLeAMFcGyrSRzjeTbDuFjzXPW3TCgtx8ErTEuyFCMbj2nLdhPD8%2Ftpk6Mja%2BbOs1UdHZltBrGLpQwxh4EuTVbvvbmeKxgy3Fv%2FVXVSR4COhqUuBnVwJc093QZVSnYMKkvZBt1h4tCtvM1XkRW56Vq5TProObkqArrjK1NDu0ErvaK4gJqA4v6l3Z0dcuntQmtdB6WgRf%2FnVHPymdvSJaDg8MCHE%2FDGi%2FoQmvhmmuDJHlvJcb5V7DJ8e%2BjrG%2FqcWu%2FDGcBAI7FM4k64p0g79ClIdoschAleeBcj5vrRtPJX%2FyHRQovHWFbGIM1VkYR67EZhlOhaLNuGiBJ4Dup17hPNRfZewHyq46rxceYhLFRjKTRyDTRZJ6R2FU5701tE0s1ZHp1oUbKj%2BZFiyyb0YsT6bJw1Nhc8z3kpH6DaEdC%2FgvaUo7YiGhikisKi1SOqzAekBzPye7k57eb4ROS8xNS48CtHEYxbXQV0gOf43reKfhe6U6%2FDFrwlRxCo2gC0ieADxI9Uv82GMJSozskGOqUBa512nDduJNPWRRxw%2BNE0k%2FN%2FzZOcUIZxMNXBA4F1tYQ5wYfh7UpST7egkY7gedAZUtkRRXTLW09BJiuJLzpmxe3KsmC%2FKT%2FsTLlNLJncNT%2B%2BWSvkxJC9MiOQlVEYZTIszBaat1cPKCtc4soqeaigXgW8F1Rl5rAh%2BKhQ4O%2BfdN1LhidA9A8wkJl9oOabPPTCsIU4ctqxdKmZqmxAL95I9JkT2USq&X-Amz-Signature=5e3aa0b9ec7f303b8848fc320a85170ad09bcc9580f7170677303f9be1ab70fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

