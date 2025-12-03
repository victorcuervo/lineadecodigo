---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPW5KUC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIC7KMsgfgxyGcQ1TTLr6Ktpp65KnHY65dOV7qlFoE4Q%2FAiEAva938DlBa4yGPCC221Eoz8Fp3kQ0A2Y9qWElYZ88MCQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIe%2BZsosdzTk6F7%2BCCrcA6XbZBey0OeDRDTTEG8gc1rcF%2Fpx7CYXDWeiqvKdW8ok5JoO9pmiSyuVwowVDfqf8vFKXELHntUV%2FEIeeFbPSR0c3iKwIP6Sr3ZOvoiz7qcssUOcZLSeeCIYhA%2FMpwJlH4b8hScnbR2D8LkqD0u3%2Bzr8py6Z928mQdOxzCxQ0Lf7jVUv5AssdY5xKi3Ltr2be2zeh9XgRopjtsB%2Bnqg3Utlb2ZdwEewj82v8ud5xtSz0mo6LD8CnCbVFsYA%2FDXJzHSN9chC1t5OO3eAAfpgbxlCQ6L57poBouwG%2B5XcDe0n6ok%2FDKsr6ei9fgtloTEiD%2BGAtAaqmR3IAJSiP5Gfotdg3uybTHYWBjOlQu22JGSxfAV2sOWq8bNgvOX6WYg%2BAJwdOudVaf5AsynGu0hUjNY0KEk0WG3VVT5w%2FL8qLLSCsidSHx84MYERt4SywFFgTjM2AbR2GV1nFtelyne%2BenSwDOTY%2Bxs%2BTEYSVNuePr8cKyyaNE9VBtpZrpdev8sV6Pb6ZZXsVhiqVOxYVSC4yr2p7XGCD5OpvgmG7Gg8KA0%2FXN6kEPKo4Udcnd2Ee8M4UXO4UDb0K9K196WayHRejVeoSAMU96xkpRMBu4WaR84WggaSj9gUXueykytvkMPyWvskGOqUBx9q9PYlc%2B%2BKsXcc4gJwB9f7AzK0cClGwt3DGle%2BcWfLzYwweEI1rlmSEmmRn%2B54iWMF0AyqzyK2h24fTWgfd91jc1rsIKaPT9QaffGlVA0mdbTm3%2Fp8brDAy4aUIhxFNSE%2BmGxLTppWs%2FWAwkQUwDshICEUD5GK02xC8kZ7cOr88XdY82A4XRqgxMyreRlxZ%2FkzJisRPdMtQPRgF%2BulazUuoPxRU&X-Amz-Signature=29b501e3aae9a01a44abde6e7ab0334e0ceaa0f27ebebd67b82c1dd921e4b411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPW5KUC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIC7KMsgfgxyGcQ1TTLr6Ktpp65KnHY65dOV7qlFoE4Q%2FAiEAva938DlBa4yGPCC221Eoz8Fp3kQ0A2Y9qWElYZ88MCQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIe%2BZsosdzTk6F7%2BCCrcA6XbZBey0OeDRDTTEG8gc1rcF%2Fpx7CYXDWeiqvKdW8ok5JoO9pmiSyuVwowVDfqf8vFKXELHntUV%2FEIeeFbPSR0c3iKwIP6Sr3ZOvoiz7qcssUOcZLSeeCIYhA%2FMpwJlH4b8hScnbR2D8LkqD0u3%2Bzr8py6Z928mQdOxzCxQ0Lf7jVUv5AssdY5xKi3Ltr2be2zeh9XgRopjtsB%2Bnqg3Utlb2ZdwEewj82v8ud5xtSz0mo6LD8CnCbVFsYA%2FDXJzHSN9chC1t5OO3eAAfpgbxlCQ6L57poBouwG%2B5XcDe0n6ok%2FDKsr6ei9fgtloTEiD%2BGAtAaqmR3IAJSiP5Gfotdg3uybTHYWBjOlQu22JGSxfAV2sOWq8bNgvOX6WYg%2BAJwdOudVaf5AsynGu0hUjNY0KEk0WG3VVT5w%2FL8qLLSCsidSHx84MYERt4SywFFgTjM2AbR2GV1nFtelyne%2BenSwDOTY%2Bxs%2BTEYSVNuePr8cKyyaNE9VBtpZrpdev8sV6Pb6ZZXsVhiqVOxYVSC4yr2p7XGCD5OpvgmG7Gg8KA0%2FXN6kEPKo4Udcnd2Ee8M4UXO4UDb0K9K196WayHRejVeoSAMU96xkpRMBu4WaR84WggaSj9gUXueykytvkMPyWvskGOqUBx9q9PYlc%2B%2BKsXcc4gJwB9f7AzK0cClGwt3DGle%2BcWfLzYwweEI1rlmSEmmRn%2B54iWMF0AyqzyK2h24fTWgfd91jc1rsIKaPT9QaffGlVA0mdbTm3%2Fp8brDAy4aUIhxFNSE%2BmGxLTppWs%2FWAwkQUwDshICEUD5GK02xC8kZ7cOr88XdY82A4XRqgxMyreRlxZ%2FkzJisRPdMtQPRgF%2BulazUuoPxRU&X-Amz-Signature=5e88fadf1b1d1b3b0982bf0bf762239e37137450ec791f7aec39a7af1fb1e95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

