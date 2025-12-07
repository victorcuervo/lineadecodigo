---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCSMFPZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVar%2FrImq6nZak4rmXanZ5mpALj69pYek3TuCALSjYjAIhAPdmZM875RiADb7Ko5z6Cu0RC7pze1cz5eMrrztdajSNKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCVPEuy4YKWLgI%2BrQq3ANc04jfkC8xJFozC8vdpWPZwHbqBTdfk2X257SFmx2%2F4ZQtAwAFaL8cOWoMSkl8fyjsc%2BxX5w%2FV6nc2doDiGV5%2FWlah7WOKfsR2%2Fzxg9iz51USnApWXmxavrbtFfHDikvPApdobi3dcc58SKz%2FL6AcJpBFVTEkgdUvsLeKan5Bglx3E69qca7%2BzBEJ05AwoVeNe3EmAbez3foBTUnLuyr0ICYaBt7NASGFVegTTQTNbjpRkagzDss9KTUzP%2FEMfUJSTu5TNpOZFHU9%2F42rgqk7URQI4bQRQovt6gk9z4pAC9OGaGGt2vURDcgLJi6VYO3qlBGf17n0b2ZUextmX%2Fm3Eg%2B0FngyTLR%2Fg%2BimIwgr2G9y0cuNG9B8OWSOgnOCCurS8Fy7vHIm9NVsN3WOT%2FAYc6WY7FKVihhSMH5Icr2oFikK3tpvyqg96Ou2KAh6bb%2FMYs0%2FcahhXe60xBILK07lJ5zfHawN7YFHlKXngaPi4gz9%2FMF8XW0IaV8H0AUwufWPbE%2BIPq%2BgRelIHwIJvlTE9zTXbRCaJ9pW%2F7dWDS91Om8ZIGrAdWs5tCRe4n9tY10RpBRpPpTXrlMZc7dzoKxc5SO8tdlo2qFCMfEr6ZPZmtNQZGGpyrwB1He78HTD7qNfJBjqkAU627uDZDGc1s57ZdN4MpKY5EJhu4sA30IaJFxCdXrLKOPIb2jp%2Fmoi8WlpbQS0ZWnDE6i0m1llBpKW5mmvzhoR3aNilbeRM5oWGPPaK2ZRLObWSf%2BUVCdAy5LHpogKluY%2B%2FRzLgVpZQqTKC13p0OQglUfzh4gXqt6g1%2FozuXIr5RhcD4Q6XkMQDlcVPlcey41KpaHQXIXUO72ibdCC6oAXQcMMg&X-Amz-Signature=e38939f696b1cf0227aae306649cce059669292b62cccac593f93e1d6f0dce70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCSMFPZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVar%2FrImq6nZak4rmXanZ5mpALj69pYek3TuCALSjYjAIhAPdmZM875RiADb7Ko5z6Cu0RC7pze1cz5eMrrztdajSNKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCVPEuy4YKWLgI%2BrQq3ANc04jfkC8xJFozC8vdpWPZwHbqBTdfk2X257SFmx2%2F4ZQtAwAFaL8cOWoMSkl8fyjsc%2BxX5w%2FV6nc2doDiGV5%2FWlah7WOKfsR2%2Fzxg9iz51USnApWXmxavrbtFfHDikvPApdobi3dcc58SKz%2FL6AcJpBFVTEkgdUvsLeKan5Bglx3E69qca7%2BzBEJ05AwoVeNe3EmAbez3foBTUnLuyr0ICYaBt7NASGFVegTTQTNbjpRkagzDss9KTUzP%2FEMfUJSTu5TNpOZFHU9%2F42rgqk7URQI4bQRQovt6gk9z4pAC9OGaGGt2vURDcgLJi6VYO3qlBGf17n0b2ZUextmX%2Fm3Eg%2B0FngyTLR%2Fg%2BimIwgr2G9y0cuNG9B8OWSOgnOCCurS8Fy7vHIm9NVsN3WOT%2FAYc6WY7FKVihhSMH5Icr2oFikK3tpvyqg96Ou2KAh6bb%2FMYs0%2FcahhXe60xBILK07lJ5zfHawN7YFHlKXngaPi4gz9%2FMF8XW0IaV8H0AUwufWPbE%2BIPq%2BgRelIHwIJvlTE9zTXbRCaJ9pW%2F7dWDS91Om8ZIGrAdWs5tCRe4n9tY10RpBRpPpTXrlMZc7dzoKxc5SO8tdlo2qFCMfEr6ZPZmtNQZGGpyrwB1He78HTD7qNfJBjqkAU627uDZDGc1s57ZdN4MpKY5EJhu4sA30IaJFxCdXrLKOPIb2jp%2Fmoi8WlpbQS0ZWnDE6i0m1llBpKW5mmvzhoR3aNilbeRM5oWGPPaK2ZRLObWSf%2BUVCdAy5LHpogKluY%2B%2FRzLgVpZQqTKC13p0OQglUfzh4gXqt6g1%2FozuXIr5RhcD4Q6XkMQDlcVPlcey41KpaHQXIXUO72ibdCC6oAXQcMMg&X-Amz-Signature=441dd4a5afa64979416c56208c67db2775252c5260bbb092748baf2818293184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

