---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2I4A6F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZIL3E%2FGInexEk6EXiS0n0667I6TETybcntRAOxsIWAiEA9IoiP%2FgN2RgYHKlnQqI0M0EEYwralNPwUkMPZnCNLFgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDilvvjjJAikxsj5cyrcA%2Fla07Y%2BzZGHyUWCiTMvNjb%2FXRmZE2JLJv9FANPa%2FElCIjM2Ac%2BrP8Ati42qcCG57DyPEeGtIaZKynRFaGr46y82o%2FpqEEOo7cLrUhPF9Y8EJDRBRtHQHy1QpJvqDe9%2BqxFlAQQNt%2FJ2fGAIifMgyZq2eVpLkviV1ZRkqujqwisf1ZapEqfxu2A8Zlpr5i7xPAVfbjB2uS0SlUXPKMIrKkq85hGevV1%2F50mHy%2FpX3c7jWMGjOatmOUF2fvUY4WFTYhQNoXSI%2BJsNjGIWpNX1crfETOX2qTGNwiYiCbaAX6bTBj%2B28QOq5aTSlZAFtrwusyGrAf%2Ba5flFSg88e49zAMpKLVX0YCgcCXqHtjY4b28ipbG2UH9s6ijED2OVUOfHjOTyyNuP83MAUiO34OO%2FpvWAyr3j%2Beetx2GZZacItAX9G8gVX9QaZyIvmNMBkKtttvr78JGjWU%2FVwrvVVYJ3CeKZYRMaa3gUXlx36SrsjIV2N3Y9QiMPOOyk%2Fb0wavpVmTU%2Bmx9dY%2BNdRFjSYVnXt3%2FEA3jeIbeVq6nI%2BpxW1HVlaQw6D26azO5CfXZ8zYISKQvBAOinMaOCEJd3vohCesKyMEY8NpGjlfyjJUklPYr8mkKszVG%2B1w3Kh2HjMIn02skGOqUB3Kufv3dECdoRkyIZoq2kdzN0%2BpaxwC9SLRUYIvHcHWc38%2FGbxYCcSXX4z5uwHrAKkrGsbUdvOgaYJieKzvet%2BPieIKlSyiYyXSNIhMGO9PErX%2F5JBH7gMjxUz0Vjirr%2FHJAZMqZ7MA7nwsvVZMnuO66%2Fx5HS%2FX6UiSU8fpIiJx8vHpPJDiebG21708gPZQYs8rK3yOwc7lz9i%2By1nIWY9IJMlQbp&X-Amz-Signature=50178e02e420ba3b44b53cb9367a6e5e14053f2db45c80e13557f67db07c7bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2I4A6F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZIL3E%2FGInexEk6EXiS0n0667I6TETybcntRAOxsIWAiEA9IoiP%2FgN2RgYHKlnQqI0M0EEYwralNPwUkMPZnCNLFgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDilvvjjJAikxsj5cyrcA%2Fla07Y%2BzZGHyUWCiTMvNjb%2FXRmZE2JLJv9FANPa%2FElCIjM2Ac%2BrP8Ati42qcCG57DyPEeGtIaZKynRFaGr46y82o%2FpqEEOo7cLrUhPF9Y8EJDRBRtHQHy1QpJvqDe9%2BqxFlAQQNt%2FJ2fGAIifMgyZq2eVpLkviV1ZRkqujqwisf1ZapEqfxu2A8Zlpr5i7xPAVfbjB2uS0SlUXPKMIrKkq85hGevV1%2F50mHy%2FpX3c7jWMGjOatmOUF2fvUY4WFTYhQNoXSI%2BJsNjGIWpNX1crfETOX2qTGNwiYiCbaAX6bTBj%2B28QOq5aTSlZAFtrwusyGrAf%2Ba5flFSg88e49zAMpKLVX0YCgcCXqHtjY4b28ipbG2UH9s6ijED2OVUOfHjOTyyNuP83MAUiO34OO%2FpvWAyr3j%2Beetx2GZZacItAX9G8gVX9QaZyIvmNMBkKtttvr78JGjWU%2FVwrvVVYJ3CeKZYRMaa3gUXlx36SrsjIV2N3Y9QiMPOOyk%2Fb0wavpVmTU%2Bmx9dY%2BNdRFjSYVnXt3%2FEA3jeIbeVq6nI%2BpxW1HVlaQw6D26azO5CfXZ8zYISKQvBAOinMaOCEJd3vohCesKyMEY8NpGjlfyjJUklPYr8mkKszVG%2B1w3Kh2HjMIn02skGOqUB3Kufv3dECdoRkyIZoq2kdzN0%2BpaxwC9SLRUYIvHcHWc38%2FGbxYCcSXX4z5uwHrAKkrGsbUdvOgaYJieKzvet%2BPieIKlSyiYyXSNIhMGO9PErX%2F5JBH7gMjxUz0Vjirr%2FHJAZMqZ7MA7nwsvVZMnuO66%2Fx5HS%2FX6UiSU8fpIiJx8vHpPJDiebG21708gPZQYs8rK3yOwc7lz9i%2By1nIWY9IJMlQbp&X-Amz-Signature=98f891eea0eff1dfb38201b857ae0de047a42c5e87fba31d4c390ca1e83c39bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

