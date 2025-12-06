---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LYX5RMS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE2MHuhL8KKGFC319BufgXhS7QSR5vtIl4Uq%2FQuq22XAiEAu1vVJfGm1Hbu5UqsLOgUMmAbw4HRGM38hVoXXHYOn9cq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMeuPynDlRNeFz19lircA5R5qP6fYBhSJf44isGWzsiERwv%2BmFG7zJd1tr6PajRNwdeB%2F%2FX5Yx2FYmsAsSWI55YWMrVXCnffD9aXaOi0xhjD3eOg9XuEnMN9POa%2BmJ%2BWEyONzaDbstA%2F4ZwdLl3VGpWSKMY%2FhLgLayUYUsNvKScxlNiOmj1Zq%2BCMoksjePNiJNDKf%2BZptHRsvJU%2FDC4EGnRif4ncFYWtwf2BlUNHUtZTZm%2F6OFTp2FsUFSFDSsX79SEon%2BzQNCG%2B%2B5%2B71MMn03TBGpyi8AvWqilCb%2F97DvjdceXUiNYCh1HUgR5U7af2cil1j%2FbH8GDdQ3SOyBIenULwZli5YMAIIM2Qn%2Bow9rZvMdaQHjujd4dE59gR0ctoKbPR1FG%2F4jtjOlpqdOG%2FiJ0JQBMZ2z6eUXkzH48m94rGvBuopYF1%2FSWQM06alhKLdgGaym4MqFj4mDsrjEImPABpDiNRlsbZroagSZ%2F%2Bpuoq7g0FAWn2TCK9568LxYLdgFRgv4psfgYh5qwl4VO8GfoeLbdOjEzyqVxhv%2FYgokiCxzcjuaX%2FaRTbStvjAizscEcpiVyl%2Fe2JPHso2L3AknSySCVXpbAeBoJ6MFD0lZHs9V0xpWHsBg%2Fv3vopStIWY8O1iID6XvFXZbqDMPL8zskGOqUBrkJYziL1%2BbvV0tvxE7KmeDxc%2Fxp8M6h%2FQ7a5RfAuJWhiRj4RRi3hBQp1I7wWrvEok75YTjHV3B%2FzxBIlc1u3zI8ieLXSMzlzGE69KP3%2F9Pqw1Bg1kjgXKBK0ITdPVTUq3Zat79BjMEKFuR8WC8NUARmoHcI7JQMOO%2BTfmiiP3DCO2NOnOkwxCF32vzAVby3xHnci4S2XF3IhqUStqgE5Q%2BXKvtfh&X-Amz-Signature=eebf11e656fad5eec319eb74d127b563cd06d07fca2802413960d4df1d04860e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LYX5RMS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE2MHuhL8KKGFC319BufgXhS7QSR5vtIl4Uq%2FQuq22XAiEAu1vVJfGm1Hbu5UqsLOgUMmAbw4HRGM38hVoXXHYOn9cq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMeuPynDlRNeFz19lircA5R5qP6fYBhSJf44isGWzsiERwv%2BmFG7zJd1tr6PajRNwdeB%2F%2FX5Yx2FYmsAsSWI55YWMrVXCnffD9aXaOi0xhjD3eOg9XuEnMN9POa%2BmJ%2BWEyONzaDbstA%2F4ZwdLl3VGpWSKMY%2FhLgLayUYUsNvKScxlNiOmj1Zq%2BCMoksjePNiJNDKf%2BZptHRsvJU%2FDC4EGnRif4ncFYWtwf2BlUNHUtZTZm%2F6OFTp2FsUFSFDSsX79SEon%2BzQNCG%2B%2B5%2B71MMn03TBGpyi8AvWqilCb%2F97DvjdceXUiNYCh1HUgR5U7af2cil1j%2FbH8GDdQ3SOyBIenULwZli5YMAIIM2Qn%2Bow9rZvMdaQHjujd4dE59gR0ctoKbPR1FG%2F4jtjOlpqdOG%2FiJ0JQBMZ2z6eUXkzH48m94rGvBuopYF1%2FSWQM06alhKLdgGaym4MqFj4mDsrjEImPABpDiNRlsbZroagSZ%2F%2Bpuoq7g0FAWn2TCK9568LxYLdgFRgv4psfgYh5qwl4VO8GfoeLbdOjEzyqVxhv%2FYgokiCxzcjuaX%2FaRTbStvjAizscEcpiVyl%2Fe2JPHso2L3AknSySCVXpbAeBoJ6MFD0lZHs9V0xpWHsBg%2Fv3vopStIWY8O1iID6XvFXZbqDMPL8zskGOqUBrkJYziL1%2BbvV0tvxE7KmeDxc%2Fxp8M6h%2FQ7a5RfAuJWhiRj4RRi3hBQp1I7wWrvEok75YTjHV3B%2FzxBIlc1u3zI8ieLXSMzlzGE69KP3%2F9Pqw1Bg1kjgXKBK0ITdPVTUq3Zat79BjMEKFuR8WC8NUARmoHcI7JQMOO%2BTfmiiP3DCO2NOnOkwxCF32vzAVby3xHnci4S2XF3IhqUStqgE5Q%2BXKvtfh&X-Amz-Signature=8a56dc635972507053653d67ded9472272a476fe44ab1ec3f398af89563b65c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

