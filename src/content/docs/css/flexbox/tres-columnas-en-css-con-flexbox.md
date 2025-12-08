---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RHYFJ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCvO325Kb6i9Kh22Jweb1yLV6X9ToVAmDWpD3Nk%2FINbgIhAOCyJzXfAA37xd2BKAYSMr2dval2o5JYRLPS8OBx4eizKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHo%2BRabfrbSTE0OIUq3ANxZs08G27elh6d0GpE6wIJ%2BzQK8BFCmhI%2FMwsa0Y8wmdjNhPjQneI35Vlmabtz4cy0eJqGWv2g%2F30Im30iQX5btTHOdIOEFC%2B496AZRnYCqHLeSOorYv17vmXMik2lBcJ2mEZLVZwUIxzlZTQTevuH10cq7co%2BDkTLL24e77DlJKGLDmBRYDyUSefZjsjvm%2Fr3RWC5LfHudIUXTtTHVgXGUjP1DBNqNZZw9SNB7hPvFzKyLoqP9hN%2BONxmC1JUufHuEByUBvNjpZ6GlzUczVZ2GF5aoGo7CzYb4V6tyPFmRMWfeQaNT6g%2FPMpsNZTkMHP08CZq131%2FeYoeAIlr62VgCCn2Vb86d8Z69vb4ZHf9V6s3DIzvsDkkihLG1hWEfcaEbvYg8r%2BUuDfNZUufqO7TEj7BJoSy55xd8L%2F5W3AdCaSDVW4vvUXtskPknzlIQ81q5t2TezIsxkXG6v%2FArDmIkdX%2FEAzdhAVfNVa9zL1iN7H91wWAaEgJETVLBSb96xfnhCFYmOGRyxp5tC42wuTdS9%2BOoiya22JQdoUSKzPuEdtIMcXSOM8eCYhx%2BGl505g25c0hpadv45ijJM6Tyw4lW7xPlDXJWjTRqXqj4UvsFJuUthJWU86hUzWvyjCKlNnJBjqkAcqJMZbFDiKj6scgYVmUT5FRlA9cOcXg7nJ5ioAXE79lv4Ud%2BaXQOwyKZbkxVBOn8YqJcM0NJu1t8sVQjWj%2F7BZaVi5ONEfQUbdR7mGSMtbMKFW3NXYaXbRjqKVvAfOU3YfFiK%2Fp2Zd042VgaSDGUdzOnagcme2Fy6%2Fr76CBnakkrqg70gS7ez1wlc90BpB2gYORss%2BmV6JCTYb1euBY0mu%2F18oe&X-Amz-Signature=94fe44e33d01bef18a41751a6dc6ea0cb56854190645e751d07022ec6ae5a3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RHYFJ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCvO325Kb6i9Kh22Jweb1yLV6X9ToVAmDWpD3Nk%2FINbgIhAOCyJzXfAA37xd2BKAYSMr2dval2o5JYRLPS8OBx4eizKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHo%2BRabfrbSTE0OIUq3ANxZs08G27elh6d0GpE6wIJ%2BzQK8BFCmhI%2FMwsa0Y8wmdjNhPjQneI35Vlmabtz4cy0eJqGWv2g%2F30Im30iQX5btTHOdIOEFC%2B496AZRnYCqHLeSOorYv17vmXMik2lBcJ2mEZLVZwUIxzlZTQTevuH10cq7co%2BDkTLL24e77DlJKGLDmBRYDyUSefZjsjvm%2Fr3RWC5LfHudIUXTtTHVgXGUjP1DBNqNZZw9SNB7hPvFzKyLoqP9hN%2BONxmC1JUufHuEByUBvNjpZ6GlzUczVZ2GF5aoGo7CzYb4V6tyPFmRMWfeQaNT6g%2FPMpsNZTkMHP08CZq131%2FeYoeAIlr62VgCCn2Vb86d8Z69vb4ZHf9V6s3DIzvsDkkihLG1hWEfcaEbvYg8r%2BUuDfNZUufqO7TEj7BJoSy55xd8L%2F5W3AdCaSDVW4vvUXtskPknzlIQ81q5t2TezIsxkXG6v%2FArDmIkdX%2FEAzdhAVfNVa9zL1iN7H91wWAaEgJETVLBSb96xfnhCFYmOGRyxp5tC42wuTdS9%2BOoiya22JQdoUSKzPuEdtIMcXSOM8eCYhx%2BGl505g25c0hpadv45ijJM6Tyw4lW7xPlDXJWjTRqXqj4UvsFJuUthJWU86hUzWvyjCKlNnJBjqkAcqJMZbFDiKj6scgYVmUT5FRlA9cOcXg7nJ5ioAXE79lv4Ud%2BaXQOwyKZbkxVBOn8YqJcM0NJu1t8sVQjWj%2F7BZaVi5ONEfQUbdR7mGSMtbMKFW3NXYaXbRjqKVvAfOU3YfFiK%2Fp2Zd042VgaSDGUdzOnagcme2Fy6%2Fr76CBnakkrqg70gS7ez1wlc90BpB2gYORss%2BmV6JCTYb1euBY0mu%2F18oe&X-Amz-Signature=b5ff1486d263ce37354aee8e6f01feae515bbc1448989861646be45ad072c62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

