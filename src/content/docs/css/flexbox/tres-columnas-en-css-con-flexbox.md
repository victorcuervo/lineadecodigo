---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7Q476W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BCUCFR1N9KKtU4XRwMRBA5WKHlGIqyQH%2B%2F%2BYHoVieTAiEAmR2sTsad%2FtVjxFamwStNpeNobRPHCy9I%2BpRSDskrm3sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB263vYCcg1Rgoqt2SrcA0XMhl89BBVhhKfQCEJnRtSt2tTO%2BeUKo2BGIoONSHOiGORfN8KmS0IbO%2BiHnZFmjtxhYruTXET%2FNV%2Bs2nCQvixf8Edmr8sOhfh1lwG0Vn5mzMcH0XIyjLOmghHsno2PkO2A1vaiJKaVyon1S3SOUTgxEKiuk047s7nBI4GnRpsULDFE95s25perrpRrDQBY31ZEpFpBlxjve5KsIBosPFC9z9ydYj7ubSGfFDgBXmhu8RhDH3GZU739W57tug7KMOyRco%2FHcKjQ2SDPzgu0nVvc%2Ba3OZuq1mNGcPr4%2F%2BD%2BlTXqJ1Rd%2BOGAHQ3r56J5W%2B2lha4AMIW360IcWiyhekd5HJatJGqc9HQPmFFB9JvlQVVK%2BU%2BTHyVq%2FitQT%2F3%2Fp7WimpPdM5Ux7v8N%2FvrHV%2FgvgGmngUXBtULjAq4Xf6HbGpclI4qppz4B0hWfCuEP2VdZg0OiBsGoL1AC3viGgV9WDsonjhYoF6IA7%2BZNdYPKAL8mVioyqlmRCPb9y7UujpY5exLgJ%2Bbsc%2FgKAPQjRR%2B%2FzGrte5UjJyUL4Tg3IFR9EQr3CunMEkFchsXgiNUo%2BB2bF7SPeHS4Zz8HRWNSO5pfCcOluv%2B7lfYebrea%2Ful6SJ3PMHHCVkaOdngfGMJym0MkGOqUBCacjGMSxX5A0TIfS7HYfiD4ycTfBdPWBckYh8XLGH17v82jhcEkZ4WZBxSbMzV3Dq679Z9RLh0ctxrmWusBtxDOW48QPWjS%2Fh0KDJLr0KYfiUXxSNB5P92xYn%2BT%2FDY%2FNl0cIyzuHnqxf%2B%2F38n4WJmG9%2F%2BLT8nsn69xrkXSjaR1ll7uBTH%2BJW0PmGZB2HPQEZuXpY1c8OTfBNJAhsuUc%2B9WbPh6SZ&X-Amz-Signature=c2f9d986e6994d08c03b046d4c5688b77b145f9057b80374edaaf512b18edd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7Q476W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BCUCFR1N9KKtU4XRwMRBA5WKHlGIqyQH%2B%2F%2BYHoVieTAiEAmR2sTsad%2FtVjxFamwStNpeNobRPHCy9I%2BpRSDskrm3sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB263vYCcg1Rgoqt2SrcA0XMhl89BBVhhKfQCEJnRtSt2tTO%2BeUKo2BGIoONSHOiGORfN8KmS0IbO%2BiHnZFmjtxhYruTXET%2FNV%2Bs2nCQvixf8Edmr8sOhfh1lwG0Vn5mzMcH0XIyjLOmghHsno2PkO2A1vaiJKaVyon1S3SOUTgxEKiuk047s7nBI4GnRpsULDFE95s25perrpRrDQBY31ZEpFpBlxjve5KsIBosPFC9z9ydYj7ubSGfFDgBXmhu8RhDH3GZU739W57tug7KMOyRco%2FHcKjQ2SDPzgu0nVvc%2Ba3OZuq1mNGcPr4%2F%2BD%2BlTXqJ1Rd%2BOGAHQ3r56J5W%2B2lha4AMIW360IcWiyhekd5HJatJGqc9HQPmFFB9JvlQVVK%2BU%2BTHyVq%2FitQT%2F3%2Fp7WimpPdM5Ux7v8N%2FvrHV%2FgvgGmngUXBtULjAq4Xf6HbGpclI4qppz4B0hWfCuEP2VdZg0OiBsGoL1AC3viGgV9WDsonjhYoF6IA7%2BZNdYPKAL8mVioyqlmRCPb9y7UujpY5exLgJ%2Bbsc%2FgKAPQjRR%2B%2FzGrte5UjJyUL4Tg3IFR9EQr3CunMEkFchsXgiNUo%2BB2bF7SPeHS4Zz8HRWNSO5pfCcOluv%2B7lfYebrea%2Ful6SJ3PMHHCVkaOdngfGMJym0MkGOqUBCacjGMSxX5A0TIfS7HYfiD4ycTfBdPWBckYh8XLGH17v82jhcEkZ4WZBxSbMzV3Dq679Z9RLh0ctxrmWusBtxDOW48QPWjS%2Fh0KDJLr0KYfiUXxSNB5P92xYn%2BT%2FDY%2FNl0cIyzuHnqxf%2B%2F38n4WJmG9%2F%2BLT8nsn69xrkXSjaR1ll7uBTH%2BJW0PmGZB2HPQEZuXpY1c8OTfBNJAhsuUc%2B9WbPh6SZ&X-Amz-Signature=d20c3130005986e4eb8b54dfa4b881aae1116dc487714114b4e1cd8e23fc8619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

