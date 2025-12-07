---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DRYITJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHR4D5rczYa1odyI3Q3PwOe2qZr4QqVj8%2FeRG4CI8VyAiEA%2BNxXf5LS60dR7o6vOnXh22NlqXMmYJz82YSso3b%2FwzkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn0Bljbtf2dhzuLOCrcAzVhu8Gc6QXc8RX8eqITS3aSx7yoTlhJQ9lTTvj%2B231gqLduBuCE%2F%2BJmMTvY0G%2FbRNh8EQmmY%2Fh2%2Fni5h0UFmhomg%2FAyGjwCy9Hkro%2BtoKZLYAEsszI5FtfpBgOpSArsTuTdruQNdVC92BztvGPbOKsIEyc2DhQIk%2BniC6xb4f8TsddFmuc7Xg7qx5LTZEKpFy4gGMD1TBv5htFQyQTmZhPwIB5emNw0z%2FC%2BQ3JdiVc1vM9C6hkLh0t72y2QYDxEJFUL8fWB8cLZkXNnafRsc6ZUdTjtiuVG7b8WXiCUfETo9y5P0bGT8glv4%2BxHbXZ%2BH0wXAAHwBazSoAyoSAczl9JLJE7lIzT8H3ivzJ2nlDORdEmMdJTV%2F%2BpY9XlKrKSaE1xM%2B0JmtSsbZ%2FvYi8HmMnHgHG16iXxYVA675uh7szekvJ3ZH3I57jAO0Rd%2FVcSFxT7LvB0DSwyCIhg%2FGZpFL90YkfOn%2BnGXN5dlcmzZHlisfjxVmnhkg8Oemw7xSBCgcVqRawVqpAtc7mS%2FqmfhWiWDOr4HmACKEA7%2FuOjRUwS8l5hzNomj6HUBK1b5BxiILW8JUjH1uEgGqYQ1IBOrWjqLE7ckoSmmw9sgEnIO%2F2gkJdSDJ7x4N4wU8MFIMNua1MkGOqUBLFw9CgalpxktVBYxedeDFMGxJF6i1l6fKuWDR9f6879aUhcgjlZINo6KFRuJi1TzM%2FCy7MlyEnRfEmpFxZV4j4n9lTAengwj%2FTdxD0mWCdSpxnX4bJtqkAlYQ768A1CZ6E1nxY57yaQKKgMTTWsZSL7tSrzQGxuMactlfPFNlSsEnFtBx0tZnmEKgNlXcSEbIAoQ3%2FD3GqQGr8kpiVGsq%2BvZ4nUx&X-Amz-Signature=58912c50101d6243730523ea2102bc50fd8435d16b5e737dbba5c025129a9587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DRYITJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHR4D5rczYa1odyI3Q3PwOe2qZr4QqVj8%2FeRG4CI8VyAiEA%2BNxXf5LS60dR7o6vOnXh22NlqXMmYJz82YSso3b%2FwzkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn0Bljbtf2dhzuLOCrcAzVhu8Gc6QXc8RX8eqITS3aSx7yoTlhJQ9lTTvj%2B231gqLduBuCE%2F%2BJmMTvY0G%2FbRNh8EQmmY%2Fh2%2Fni5h0UFmhomg%2FAyGjwCy9Hkro%2BtoKZLYAEsszI5FtfpBgOpSArsTuTdruQNdVC92BztvGPbOKsIEyc2DhQIk%2BniC6xb4f8TsddFmuc7Xg7qx5LTZEKpFy4gGMD1TBv5htFQyQTmZhPwIB5emNw0z%2FC%2BQ3JdiVc1vM9C6hkLh0t72y2QYDxEJFUL8fWB8cLZkXNnafRsc6ZUdTjtiuVG7b8WXiCUfETo9y5P0bGT8glv4%2BxHbXZ%2BH0wXAAHwBazSoAyoSAczl9JLJE7lIzT8H3ivzJ2nlDORdEmMdJTV%2F%2BpY9XlKrKSaE1xM%2B0JmtSsbZ%2FvYi8HmMnHgHG16iXxYVA675uh7szekvJ3ZH3I57jAO0Rd%2FVcSFxT7LvB0DSwyCIhg%2FGZpFL90YkfOn%2BnGXN5dlcmzZHlisfjxVmnhkg8Oemw7xSBCgcVqRawVqpAtc7mS%2FqmfhWiWDOr4HmACKEA7%2FuOjRUwS8l5hzNomj6HUBK1b5BxiILW8JUjH1uEgGqYQ1IBOrWjqLE7ckoSmmw9sgEnIO%2F2gkJdSDJ7x4N4wU8MFIMNua1MkGOqUBLFw9CgalpxktVBYxedeDFMGxJF6i1l6fKuWDR9f6879aUhcgjlZINo6KFRuJi1TzM%2FCy7MlyEnRfEmpFxZV4j4n9lTAengwj%2FTdxD0mWCdSpxnX4bJtqkAlYQ768A1CZ6E1nxY57yaQKKgMTTWsZSL7tSrzQGxuMactlfPFNlSsEnFtBx0tZnmEKgNlXcSEbIAoQ3%2FD3GqQGr8kpiVGsq%2BvZ4nUx&X-Amz-Signature=989d2b41eb2ada66fb7d7cf73a7748517aba0e0dc9fb014ddfb7bf9ba7895173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

