---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPXHJ3Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWhzhx7KfMnMv4Uf08XhpJvzmscwFs%2Ft5goS8v5dJclAiEAuedS3QucQCn%2BYEwA9VgpddTXQspuUPlbVy%2BOM%2BQD7Ssq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOyUAXg6HKV1xlYlDSrcAzqX8dpC4Lp9Tqwgo1uECtoB7fX0cq8HXIPsWTfx95xOwV%2F6qmOb7ogtSo6q%2FlitjT4bVhQrf%2F6%2FN7lEOlNs8utYPj2T%2B6l8g3rHTmBEHlxaCLFa6a9Gg9l9IGcrv%2FyRg9ENGJ55RjWeNvoJkzpUhsMlsRKyT0ol6czrneHBI4NAsXp4wAe6aapsNp6TzicmQJLkU4hpvsjCKCfdA4YOuYEYpECg1nE3wObG0aUBSY5q8XGVC64LmuuZmJMEQkrcp5co9ivq%2BMUOKX5ldWW8sT4ZCPl9dRHKtvHCmMgQ1qq%2FlnGhJwJF15UJmtFyLiwOxZD%2FGEKWVo4FyE6KRsLAG1%2F6AY5%2FvwYxU40xoSwXZg2XovNCrUWXYh3oDIpCIOGtrIXCEW%2FxFCkSri3uelo1G%2Fa3bE0J1Wiiyp6IeSSToZoel4VCcRgtwyu0y94T3wBLoNLS%2B4UvTMBCcdKgqTiFuA3bghirhtdoLy0%2Bf7rfv%2BEiOixE65hMqTZOFou8elYoaafyMuDkkyNQq7MLGsXRZiUifNIhlSTwlKhCUnC5Q7qyfkxNYac573o2LGxaOlQWMuFtUPEFm%2BklhCJefpi4Qcc0Nik15CkZNZeyMMs1b5t3uf50%2B0ndWrVlYK%2FjMK7M0ckGOqUBOJIVvSitxES8pbMfCDBlt5ioETUBhdRrnQYT233VIuUjCRb4PZGsfFPk45J%2Fqrop76w598ko%2FzPH%2FSSOy%2F8rsfhh1u7Lsa90xya4k49zsrUuDkNe5Q0ckBgcno7cP40BvUzmQP22JlgMU0eo6%2FrVwxnc6qJbJ6EdSX4TzBe8EafSyonsCZt8SqtD9%2FyDh2P2hv49ltaNJKWfUdQqC%2FWBspIVoDVy&X-Amz-Signature=0ec4e98e8db98d5200c99dbe66d227763d998d6b8e74aac6dbccc02900917c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPXHJ3Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWhzhx7KfMnMv4Uf08XhpJvzmscwFs%2Ft5goS8v5dJclAiEAuedS3QucQCn%2BYEwA9VgpddTXQspuUPlbVy%2BOM%2BQD7Ssq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOyUAXg6HKV1xlYlDSrcAzqX8dpC4Lp9Tqwgo1uECtoB7fX0cq8HXIPsWTfx95xOwV%2F6qmOb7ogtSo6q%2FlitjT4bVhQrf%2F6%2FN7lEOlNs8utYPj2T%2B6l8g3rHTmBEHlxaCLFa6a9Gg9l9IGcrv%2FyRg9ENGJ55RjWeNvoJkzpUhsMlsRKyT0ol6czrneHBI4NAsXp4wAe6aapsNp6TzicmQJLkU4hpvsjCKCfdA4YOuYEYpECg1nE3wObG0aUBSY5q8XGVC64LmuuZmJMEQkrcp5co9ivq%2BMUOKX5ldWW8sT4ZCPl9dRHKtvHCmMgQ1qq%2FlnGhJwJF15UJmtFyLiwOxZD%2FGEKWVo4FyE6KRsLAG1%2F6AY5%2FvwYxU40xoSwXZg2XovNCrUWXYh3oDIpCIOGtrIXCEW%2FxFCkSri3uelo1G%2Fa3bE0J1Wiiyp6IeSSToZoel4VCcRgtwyu0y94T3wBLoNLS%2B4UvTMBCcdKgqTiFuA3bghirhtdoLy0%2Bf7rfv%2BEiOixE65hMqTZOFou8elYoaafyMuDkkyNQq7MLGsXRZiUifNIhlSTwlKhCUnC5Q7qyfkxNYac573o2LGxaOlQWMuFtUPEFm%2BklhCJefpi4Qcc0Nik15CkZNZeyMMs1b5t3uf50%2B0ndWrVlYK%2FjMK7M0ckGOqUBOJIVvSitxES8pbMfCDBlt5ioETUBhdRrnQYT233VIuUjCRb4PZGsfFPk45J%2Fqrop76w598ko%2FzPH%2FSSOy%2F8rsfhh1u7Lsa90xya4k49zsrUuDkNe5Q0ckBgcno7cP40BvUzmQP22JlgMU0eo6%2FrVwxnc6qJbJ6EdSX4TzBe8EafSyonsCZt8SqtD9%2FyDh2P2hv49ltaNJKWfUdQqC%2FWBspIVoDVy&X-Amz-Signature=4654cfcf01db0f9f0dcf866f27b7fd34c20e92bb027ffdf7fc7100a0ddc90530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

