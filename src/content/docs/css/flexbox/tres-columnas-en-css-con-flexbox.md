---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQ7OWGV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVdmwfken2FrT96L474gJMZI3GhcFp%2F672Nhbk3KyVAIgbcq4Qx62w0ybIKpwPg0mxwJjnmUCxlcCy4zdWR6B9ekqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhNBscRMV1%2FxudNLCrcA4IZHVLhqobiv9yhRtVP5wCO%2FS2Krtb5aQw6l16%2B%2FKkeWVfBjrCgsQwASTHWLnUY3KQ9hnuN8Aai34uUOJ2ljvWQU3K4C%2FSLFbriNp7sSMTUvNtMSK6HI7iY1USiGKOS0NUy4mpd9F3nlZn6SkKTcuc2rz14VcxPzk%2FDiWlbOCoEngzdKNx7n9eAUX9cdQi%2B2uvyttVeXgEPNBTRZ%2Foeq9GwBn%2FB1WwLEqYqCd%2B9xDm74f%2FaR69tShbXFW1jCR29N6ho7OHXthR8Fv1MODFzsfnEBRa7i9pvJaTFXP72ls1CLADDMQRHEWBkmzlYRd5QMVJk8A7jTXmMxvQvY77YE%2BhUTeJOPbeE53F8Opy4NMoO2YbkykyHgYsiijzyYqev1ok8mAHC0fBeUHu%2F8dEhKRj3UXmTyvNnLgMFpX83Qfh1VxWQOx1RPi8ciMas7J347gV0yh01vfUNQJ8q%2F3sQ0VO%2FRqycNFyr4A1Hse1M%2FVXovPPbn7ZD2gjh2Tvt3bR3K5iFAiQKx3npsyAROUk7WK2y1P7k8V0hS2ItC8E%2Bu1bCJ8Por3mciNAri5U2LQtzobbv0KTCQARbTS4adptZj2fNPF%2Bcf5ZgMnPvtkSXl4WUQGiAKICO1Ugqnx4tMI%2BQ28kGOqUBF93eCpAjpmkynFEK%2F7RQKl6ExuopX7xqkPyGi1DJcxlwW4%2FC97ies9Oyy1KGGA6kHjU4Da66uckR29crHIYVA9Ea2wPy5PnSA1Aqdmziw4TCEjcX4xqt5wy4SaBj3e9EM41Hi8sJ67t1yphfldvpzrNVB5ey4C0PqNb5qlrvpb17IuFgGYntvt%2FqntlJvhQvP%2Fwd2jJ9BFi9uxkeHN7LV9P%2BqkhB&X-Amz-Signature=73ee01db63d1a010f5ab8d2c2868080ad0c3628a12a18bd29db732b623284d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQ7OWGV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVdmwfken2FrT96L474gJMZI3GhcFp%2F672Nhbk3KyVAIgbcq4Qx62w0ybIKpwPg0mxwJjnmUCxlcCy4zdWR6B9ekqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhNBscRMV1%2FxudNLCrcA4IZHVLhqobiv9yhRtVP5wCO%2FS2Krtb5aQw6l16%2B%2FKkeWVfBjrCgsQwASTHWLnUY3KQ9hnuN8Aai34uUOJ2ljvWQU3K4C%2FSLFbriNp7sSMTUvNtMSK6HI7iY1USiGKOS0NUy4mpd9F3nlZn6SkKTcuc2rz14VcxPzk%2FDiWlbOCoEngzdKNx7n9eAUX9cdQi%2B2uvyttVeXgEPNBTRZ%2Foeq9GwBn%2FB1WwLEqYqCd%2B9xDm74f%2FaR69tShbXFW1jCR29N6ho7OHXthR8Fv1MODFzsfnEBRa7i9pvJaTFXP72ls1CLADDMQRHEWBkmzlYRd5QMVJk8A7jTXmMxvQvY77YE%2BhUTeJOPbeE53F8Opy4NMoO2YbkykyHgYsiijzyYqev1ok8mAHC0fBeUHu%2F8dEhKRj3UXmTyvNnLgMFpX83Qfh1VxWQOx1RPi8ciMas7J347gV0yh01vfUNQJ8q%2F3sQ0VO%2FRqycNFyr4A1Hse1M%2FVXovPPbn7ZD2gjh2Tvt3bR3K5iFAiQKx3npsyAROUk7WK2y1P7k8V0hS2ItC8E%2Bu1bCJ8Por3mciNAri5U2LQtzobbv0KTCQARbTS4adptZj2fNPF%2Bcf5ZgMnPvtkSXl4WUQGiAKICO1Ugqnx4tMI%2BQ28kGOqUBF93eCpAjpmkynFEK%2F7RQKl6ExuopX7xqkPyGi1DJcxlwW4%2FC97ies9Oyy1KGGA6kHjU4Da66uckR29crHIYVA9Ea2wPy5PnSA1Aqdmziw4TCEjcX4xqt5wy4SaBj3e9EM41Hi8sJ67t1yphfldvpzrNVB5ey4C0PqNb5qlrvpb17IuFgGYntvt%2FqntlJvhQvP%2Fwd2jJ9BFi9uxkeHN7LV9P%2BqkhB&X-Amz-Signature=1cd3ba35fa628c941a1be0eb48667927ef020ac10f252a15f5c46cfb68fa75f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

