---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NCTONL5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE6Sy1F2e0u8ybTFtesQd1Am0a4px2HUX6K9xDLUwF6AiA5brHcNG3HatTUWoCdtbUkUxV7xY45VOVEJvwCcPWaJir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMq6QnpK8WZNu%2FyJ%2FlKtwDoCwc2xyPdxzwEYAME%2BVNyrXJH7bsu9PGmhihwEPqSJKkKIFIrBs4gHAz20q7VwTjxfklNsHeSSQaVX2oQ0CFxezJC4MVnTRAE6VXXrk93N3%2Bvt4fnVcBiycRbzgRGNJ2UCAkgEuW2KKMem%2FTbBipFJtWsZCJy1yIvlln2L7I5X%2BUGAPzYDP2KC%2BW4YbNaTzlbsBIRpRTDL5oc%2BC6OJHdtO9BtDCoVKJRMtxsBEmY8vuhnOT3avSVGsuAAWyqGCn1SIZl74avMmhE9AtS7s8VAkDERbR7Xsn7MIUXbytxXZxyIC%2FruZRMEm1Sd1xoa4BlnMNdz5dWZjfjKuTuAO087mh9vzWpqTzzKAy56W9Th4MxJ7e3lSR8GqO4rNQ99tboJnAb%2BM94Ufq7%2BnbzsVOPOUHuSlOwVWutf9b4e1Khv1ANdCGkOUfHDGGnWgNQJmOqRsXg%2BLik3xktMcjO9TeyCDZ2uepIx%2FjwK4OQ7%2FEZlHPNa%2FTL88v0Ls0e8kbO7eMB72vEW9uBPFM%2F6%2Bra8wG%2BNWL58L%2BO%2BC4vgchcRRPANs%2B8n7Ne0LZ3d4hjnF8v3N2N0lB5RGCytpb61wfRDazYlu5HddzsSNdY7Qlof7n6qlr41UhwXOYsciY7T80wn9DKyQY6pgEuLF3lcIy1gok60PE4IF73tdqLxnxRkr5Q4fv%2Fo4209dam1YQE0QzadsIIEv3MWLwg15ScbPYRzMpCb3kGQyqQidz%2FuJieos04IgKPv6Q7nrUdQi6MV3BA%2FlM1o90UYtT4Vxr2is%2BZTmsLtE5icXbgwKJa0zN5dbusOfNQJ6cWmyNaQ9rm6oH%2FuVtJ5ix8qbrDuZw3AIDVl4KZbdGs6FG81av1ajf1&X-Amz-Signature=815c99a441b00f42b7e51c619fee1f5a8a58f2f9f64c57d8e33560f7711a7a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NCTONL5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE6Sy1F2e0u8ybTFtesQd1Am0a4px2HUX6K9xDLUwF6AiA5brHcNG3HatTUWoCdtbUkUxV7xY45VOVEJvwCcPWaJir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMq6QnpK8WZNu%2FyJ%2FlKtwDoCwc2xyPdxzwEYAME%2BVNyrXJH7bsu9PGmhihwEPqSJKkKIFIrBs4gHAz20q7VwTjxfklNsHeSSQaVX2oQ0CFxezJC4MVnTRAE6VXXrk93N3%2Bvt4fnVcBiycRbzgRGNJ2UCAkgEuW2KKMem%2FTbBipFJtWsZCJy1yIvlln2L7I5X%2BUGAPzYDP2KC%2BW4YbNaTzlbsBIRpRTDL5oc%2BC6OJHdtO9BtDCoVKJRMtxsBEmY8vuhnOT3avSVGsuAAWyqGCn1SIZl74avMmhE9AtS7s8VAkDERbR7Xsn7MIUXbytxXZxyIC%2FruZRMEm1Sd1xoa4BlnMNdz5dWZjfjKuTuAO087mh9vzWpqTzzKAy56W9Th4MxJ7e3lSR8GqO4rNQ99tboJnAb%2BM94Ufq7%2BnbzsVOPOUHuSlOwVWutf9b4e1Khv1ANdCGkOUfHDGGnWgNQJmOqRsXg%2BLik3xktMcjO9TeyCDZ2uepIx%2FjwK4OQ7%2FEZlHPNa%2FTL88v0Ls0e8kbO7eMB72vEW9uBPFM%2F6%2Bra8wG%2BNWL58L%2BO%2BC4vgchcRRPANs%2B8n7Ne0LZ3d4hjnF8v3N2N0lB5RGCytpb61wfRDazYlu5HddzsSNdY7Qlof7n6qlr41UhwXOYsciY7T80wn9DKyQY6pgEuLF3lcIy1gok60PE4IF73tdqLxnxRkr5Q4fv%2Fo4209dam1YQE0QzadsIIEv3MWLwg15ScbPYRzMpCb3kGQyqQidz%2FuJieos04IgKPv6Q7nrUdQi6MV3BA%2FlM1o90UYtT4Vxr2is%2BZTmsLtE5icXbgwKJa0zN5dbusOfNQJ6cWmyNaQ9rm6oH%2FuVtJ5ix8qbrDuZw3AIDVl4KZbdGs6FG81av1ajf1&X-Amz-Signature=0c24c3d30dff6849b27c2e5d766049e3d487c465aee67515290cb4e61dfc9bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

