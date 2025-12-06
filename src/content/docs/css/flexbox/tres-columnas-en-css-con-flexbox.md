---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FY25LE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI5oM72Ah9A4zio6P422UaOFloUhhkxxot9PCxtRDEGQIgcbHrpZpinFNdVXS6DBQecZxnP2nid3NQh7sw09G6Rewq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDExweVmQr%2FE543C4dCrcA0XKFmLLrTQ2430TqGsOl%2BntK4rmGoXn3v5FptUebghU3u0bz%2F1v13dwvX42zjhKke2XNYqKDFFG5Ozl62gyq760EEENjxx8yLlgCttSGVvL5zE2exjeOXkWeCihsOzjOMloT6jHrEHorpUYYmFR07WuYQ%2FUBM0mTpNYSVh12MX9lHm3fCMDoPkj%2BU1FA7JfOYWKDwsbEzH2%2FA5Mkhrb0vkKK46BpxTCvgCmKywpIByIb385IEJ1vi5uLHs4tP34SExnzIMyYVePAVeYVf7zEAoMv2gUsxscQuxe32Gfr80gBEvX%2FYwCRFN0%2BEVdfkwAoKaQdsCNTih7yuX5Aw8QSwaw%2FtnNCRh38rlMyvqHd%2BzZOuRNE1ZZVQ%2FOSAdKnaIPxWvED3iWgAKkMN5wZhx5%2BLMB4Rl%2FXQM92wXfClaRtcVoz%2FtVhHpxvxFZ0t%2BCjL6tiAI%2BwCflru74hGDwucuf0qbsWZak4VG%2FBLlwkWsXD1Jw5LKWqusbkpGBmKKXDhdSaWYUZbbKdf%2BY86pOUmXiv3xo5EthvOxb3Dt2l1WH65xwg8wDMcljDUxv4eD3hwE2PnAxbHiUrbmTtQ7357Y1ziIo4%2BVMLvoJMBRmbcN6IvipomXMKDv6TcDVfnB5MN7CzskGOqUB1ykRJO13b7c%2BJJemjdsKXAgjJeA1pdW6mR4bj0RZ1%2Bcqf4TfRHjtDJlHxeTiiXO9EzqfX2UAu%2B%2FQWAQo4liqWoMXMiF69%2FJBVFQ6BdrvVosudrhJ42e2iRB32gdbg8WzHcgea6oLdSVa3JfT%2FezOYn2%2BpkSt4oK9XJCAXeVwQrFadWElzUflg2kwB5%2FSj1ynJpHJsaSxnsvNtfJQ14nQnSl0P%2FJy&X-Amz-Signature=39f367fec984fffe103c6c04f16052d38102999b32cb6c5e0c98f4561194389b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FY25LE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI5oM72Ah9A4zio6P422UaOFloUhhkxxot9PCxtRDEGQIgcbHrpZpinFNdVXS6DBQecZxnP2nid3NQh7sw09G6Rewq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDExweVmQr%2FE543C4dCrcA0XKFmLLrTQ2430TqGsOl%2BntK4rmGoXn3v5FptUebghU3u0bz%2F1v13dwvX42zjhKke2XNYqKDFFG5Ozl62gyq760EEENjxx8yLlgCttSGVvL5zE2exjeOXkWeCihsOzjOMloT6jHrEHorpUYYmFR07WuYQ%2FUBM0mTpNYSVh12MX9lHm3fCMDoPkj%2BU1FA7JfOYWKDwsbEzH2%2FA5Mkhrb0vkKK46BpxTCvgCmKywpIByIb385IEJ1vi5uLHs4tP34SExnzIMyYVePAVeYVf7zEAoMv2gUsxscQuxe32Gfr80gBEvX%2FYwCRFN0%2BEVdfkwAoKaQdsCNTih7yuX5Aw8QSwaw%2FtnNCRh38rlMyvqHd%2BzZOuRNE1ZZVQ%2FOSAdKnaIPxWvED3iWgAKkMN5wZhx5%2BLMB4Rl%2FXQM92wXfClaRtcVoz%2FtVhHpxvxFZ0t%2BCjL6tiAI%2BwCflru74hGDwucuf0qbsWZak4VG%2FBLlwkWsXD1Jw5LKWqusbkpGBmKKXDhdSaWYUZbbKdf%2BY86pOUmXiv3xo5EthvOxb3Dt2l1WH65xwg8wDMcljDUxv4eD3hwE2PnAxbHiUrbmTtQ7357Y1ziIo4%2BVMLvoJMBRmbcN6IvipomXMKDv6TcDVfnB5MN7CzskGOqUB1ykRJO13b7c%2BJJemjdsKXAgjJeA1pdW6mR4bj0RZ1%2Bcqf4TfRHjtDJlHxeTiiXO9EzqfX2UAu%2B%2FQWAQo4liqWoMXMiF69%2FJBVFQ6BdrvVosudrhJ42e2iRB32gdbg8WzHcgea6oLdSVa3JfT%2FezOYn2%2BpkSt4oK9XJCAXeVwQrFadWElzUflg2kwB5%2FSj1ynJpHJsaSxnsvNtfJQ14nQnSl0P%2FJy&X-Amz-Signature=99407241afba762780b89e4345c2006185804d6b04d85f094497bd81baf6fb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

