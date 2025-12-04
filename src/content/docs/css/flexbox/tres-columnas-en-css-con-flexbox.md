---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36H7HAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDU1Q2QDjgnSqTLrabhOcSJ4LxcTsZMl0RThJ3kJTc3cgIhAN0HSku6mefJHsZ9RBMo%2BMBi8BpY2GTESkfvawGQ0YXfKv8DCEQQABoMNjM3NDIzMTgzODA1IgzEGCc7ALnv1RN3lY8q3AOxCWFYWgtNUDUXdMS5rqc3NAxR1zt3nzlQlfLIEYAU2Jvc2U2ApHT6lVMxlunDB%2Bdosr66Uf1ekoi6f1y6z2bJMz6sJmIlXRko%2FPNSUC%2FzRi6Pg1kZLS%2BT4aBFRb4hm%2FFbcu04CGEadhXY8aQ4jx4ugLchg3wG296OaA3V0UlVbwQurKf1PtVWJhxr1z5bLGNxVSk7QI1mveSlVsAIHtHSq4iBKQbPSxpqb50c6fUtMr1DVJXJwJ1GDZ9O7a4WnMSgZAkszufPfmOYimQgFOrtJRVgheW3M8RIqy%2FMupXgw4%2BDmPoDk9GXrj31WOhAVBujBVtc4XbV81pTrtfEVQrNE9LQMzRl9X1iLAALUGGNkVXBmPuUWTY8PJMPrUnm%2BsBUQIlmewJMs9RmU1y%2FYlyR6c7ds%2FkiOLP5h78s1zEXqL%2BUiifF%2F7X9bCQWo%2BwBhOVPmfVV%2Fsmytdfwx0GxbX0%2F3F19%2FkozzQR9T4neQISnXpLczijAngTRxa3LyNjjtZ05uzmiSIFQeS%2B4ENSenUz3f1BClD%2BGTTbERe2XHr69S4KGM5uKhMKG0cSEUVjjfOKmw2vCHcyf9WNaPwA5tGcnZrC50e4r1AT04amZ1TL3uegbFlLW0PXfvrocmDCcycXJBjqkARLLt36URb8DPtAR8aUBVusB0BCtcPN4TZUnaEq6f7XWi0ummUr9m7W5bSCTsXXdUrwctLtidqamBJyl9B8esjqA2QKQkpP4FZ2JpZptzFVobZHOrN7gOmn7l7VbWMXELbfGyfZzrC%2F8KbNYjaVNvlyVNZt70GHV1SePIDXvtzHemJYqpMB3%2Br06UYhg9tAAnheHsHTJf67vdoQh7X6WSuM3dTXn&X-Amz-Signature=8853494e2a026ba6b70b166de0774c3b13c57b4af6be733f9e36e903ed85dddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36H7HAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDU1Q2QDjgnSqTLrabhOcSJ4LxcTsZMl0RThJ3kJTc3cgIhAN0HSku6mefJHsZ9RBMo%2BMBi8BpY2GTESkfvawGQ0YXfKv8DCEQQABoMNjM3NDIzMTgzODA1IgzEGCc7ALnv1RN3lY8q3AOxCWFYWgtNUDUXdMS5rqc3NAxR1zt3nzlQlfLIEYAU2Jvc2U2ApHT6lVMxlunDB%2Bdosr66Uf1ekoi6f1y6z2bJMz6sJmIlXRko%2FPNSUC%2FzRi6Pg1kZLS%2BT4aBFRb4hm%2FFbcu04CGEadhXY8aQ4jx4ugLchg3wG296OaA3V0UlVbwQurKf1PtVWJhxr1z5bLGNxVSk7QI1mveSlVsAIHtHSq4iBKQbPSxpqb50c6fUtMr1DVJXJwJ1GDZ9O7a4WnMSgZAkszufPfmOYimQgFOrtJRVgheW3M8RIqy%2FMupXgw4%2BDmPoDk9GXrj31WOhAVBujBVtc4XbV81pTrtfEVQrNE9LQMzRl9X1iLAALUGGNkVXBmPuUWTY8PJMPrUnm%2BsBUQIlmewJMs9RmU1y%2FYlyR6c7ds%2FkiOLP5h78s1zEXqL%2BUiifF%2F7X9bCQWo%2BwBhOVPmfVV%2Fsmytdfwx0GxbX0%2F3F19%2FkozzQR9T4neQISnXpLczijAngTRxa3LyNjjtZ05uzmiSIFQeS%2B4ENSenUz3f1BClD%2BGTTbERe2XHr69S4KGM5uKhMKG0cSEUVjjfOKmw2vCHcyf9WNaPwA5tGcnZrC50e4r1AT04amZ1TL3uegbFlLW0PXfvrocmDCcycXJBjqkARLLt36URb8DPtAR8aUBVusB0BCtcPN4TZUnaEq6f7XWi0ummUr9m7W5bSCTsXXdUrwctLtidqamBJyl9B8esjqA2QKQkpP4FZ2JpZptzFVobZHOrN7gOmn7l7VbWMXELbfGyfZzrC%2F8KbNYjaVNvlyVNZt70GHV1SePIDXvtzHemJYqpMB3%2Br06UYhg9tAAnheHsHTJf67vdoQh7X6WSuM3dTXn&X-Amz-Signature=7b259e6c48f7c919eaad95b1d21e1135e8d7f2bd7e3a98e0b93145e461f4ff54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

