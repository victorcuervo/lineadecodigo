---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJJNTWJX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQVGkEGGVX0lEl%2FtpLmBGAnQa%2Fpy%2F4Up1Kp8nLHOAy0AiEArRhxWQEyLSSA9j2DU0rEEaSudp19uF%2BykCic5X6TbWoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDD2CRTOCV4nuN7hNbyrcA4dFlH7ytH2I1nNJ0DUGyiROjvCZTJfDMy2aqS%2FR7RULSH%2BmZsjEUwPVs8JU0%2BswKdYz64bETjQA8HVvL9Zd8X3TwtmhMW4hnKHsouJiHY3TMYGiMv9VLWyNEIzhzmu8TTmqxoJHdCC6dNRvHUXz3XT05tdEHMjLc3%2Bwd2zQiTlbaLzKfvHWW1ud0ccNyRj24YiyplMQJBM7tEZdpW4nwfm6mEQKB%2FvWCsyWmcLXF3M15dJPyqyvH5RU2%2BaVnkwrBUupDkh%2BifocNv4AWyaWd7X9oWvZ41jkIdfVkXrfB90qzbjriUcrA81Ro8ZVnFtZP3UcLklCOuqZR2nmexWCsdaqaY%2FLSfdfqQppNGU%2B10DJ0OtxPnqeAS%2Bp4HwAWKmIXgkgSKrAgbCYf7aGhX%2F%2FMlWyqJ1JSQ1mf7Kr1A2MQW6r%2FKM2G3OhJIEfgdVp0Iysw59zwVq9o98IDxUJhnvsl8438kIWMSv9eUyqDQV5qDe6CQx%2BRPdIEyTRKHLAF0%2Br2g49qvyufwf%2B8mVVJ4oUwQ65%2F77xn%2BAOMWIJIOncLgUxRlaZFoKGUEjyso%2BrQMaIdmx%2FWzUx7JDh3cvrPfGj0NO0ApB4PYyeXaS18fzgPfaB5WAQbBMPPWywItuvML%2BmyskGOqUBCmyJlX9TLVuNn6euEhmrVFRfOuvFfDtBMJUj4wv0gVA4l6Och2G5naWdBBK8%2FoLK0OUMF0QrKSByjgaO2VhG9rI0%2FgO5TBXDwjc94zVcgTXUVTf7EXW6IEuVEwcGJkT1WnB%2FxWC4DudqC8L%2FkA%2FK31Nqmj2hD7wMPGB1vdslHCv5utOXlF9z4AXrN1EzChb38rn46Q5tD1x7Ug5Zok6yxxOzLe89&X-Amz-Signature=b6bc87f853f829a52e699c5e69407420e1b65caeeae7f6a633015cb4230aee24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJJNTWJX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQVGkEGGVX0lEl%2FtpLmBGAnQa%2Fpy%2F4Up1Kp8nLHOAy0AiEArRhxWQEyLSSA9j2DU0rEEaSudp19uF%2BykCic5X6TbWoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDD2CRTOCV4nuN7hNbyrcA4dFlH7ytH2I1nNJ0DUGyiROjvCZTJfDMy2aqS%2FR7RULSH%2BmZsjEUwPVs8JU0%2BswKdYz64bETjQA8HVvL9Zd8X3TwtmhMW4hnKHsouJiHY3TMYGiMv9VLWyNEIzhzmu8TTmqxoJHdCC6dNRvHUXz3XT05tdEHMjLc3%2Bwd2zQiTlbaLzKfvHWW1ud0ccNyRj24YiyplMQJBM7tEZdpW4nwfm6mEQKB%2FvWCsyWmcLXF3M15dJPyqyvH5RU2%2BaVnkwrBUupDkh%2BifocNv4AWyaWd7X9oWvZ41jkIdfVkXrfB90qzbjriUcrA81Ro8ZVnFtZP3UcLklCOuqZR2nmexWCsdaqaY%2FLSfdfqQppNGU%2B10DJ0OtxPnqeAS%2Bp4HwAWKmIXgkgSKrAgbCYf7aGhX%2F%2FMlWyqJ1JSQ1mf7Kr1A2MQW6r%2FKM2G3OhJIEfgdVp0Iysw59zwVq9o98IDxUJhnvsl8438kIWMSv9eUyqDQV5qDe6CQx%2BRPdIEyTRKHLAF0%2Br2g49qvyufwf%2B8mVVJ4oUwQ65%2F77xn%2BAOMWIJIOncLgUxRlaZFoKGUEjyso%2BrQMaIdmx%2FWzUx7JDh3cvrPfGj0NO0ApB4PYyeXaS18fzgPfaB5WAQbBMPPWywItuvML%2BmyskGOqUBCmyJlX9TLVuNn6euEhmrVFRfOuvFfDtBMJUj4wv0gVA4l6Och2G5naWdBBK8%2FoLK0OUMF0QrKSByjgaO2VhG9rI0%2FgO5TBXDwjc94zVcgTXUVTf7EXW6IEuVEwcGJkT1WnB%2FxWC4DudqC8L%2FkA%2FK31Nqmj2hD7wMPGB1vdslHCv5utOXlF9z4AXrN1EzChb38rn46Q5tD1x7Ug5Zok6yxxOzLe89&X-Amz-Signature=7b4654c8fc2d627a6458ec9b9d1c38960c2c87c3735acce27168716c7d6effa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

