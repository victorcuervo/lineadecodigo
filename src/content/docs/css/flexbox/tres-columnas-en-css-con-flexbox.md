---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVL3TRWY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHWwUPq42AD%2BO4y7FLrLrifjQxP6w2lrRyuc%2Bw942SRIAiEAgRYDJmqDC4EYAeutZQ2b52Zr5U9jM6Gqb0bwmRDVgcQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDCCySPWTFskWoj6uyrcA7Y2rTmm95C4A6HL8vjVFRzFoN0ssicrZW00FPjtV3qg0o7TR6Mf2Rzit5coMScCmGPpogtWuKptbBgI%2BBlvlwr5Ee4LJ4%2F7g3i0L3At2l0ABuVkEKgakKlMc0V8Hv2MoJ57U4w%2BzVpluwsJrdUzjBKiEKe8f%2BPB68jPmi8CZCbaDiENDYrsRHWfU1QwDTQP%2Bv39mKYo9aKMK5j2OvGPw%2BFxre%2BIn5sFmy4eic2b6mWWR5H5hkYC2StJtStpL5xt11aRiQ85hFgdfpVFQwDWemVCZv1um%2B3%2FXCiNQMlVZBnHw6IpmG7v0XhvqitdkA50WX8%2FVovz226PgHwUK4qLlZu13KtEyMvJ%2F8OYbEPcwGSPBX3AQrXyfc15ZasCT1ahEDZ%2B%2BMUDRzI3Jy71V%2B4RWBbjB%2BypIIA72yWBbbiMDjLUf7oiQjPymFWU10B0gIkKeH2V5SEngIxxoaAMkg0rdY2ENQvFXIYVNvREypqM9MDLLPn3NXZ50NEXHpWyryCkiMkCK%2FDO0RbZtGsl%2BGYYbR6PNY3dCaAe60XNmSv0mYZQry%2BMrIQeYGsImeRd5mCY3lKhGfN5osRBzWrSLfV7uC%2BIJ7cGHqJsx2yuWqKGr6ti6JP6hUiUWG%2BbzoLkMMbVw8kGOqUB9%2FKm%2Bml7rujITrWDDnFbRE9wrLIzekiX%2FGz9zkbMHzj4TrATof44D%2FrXJVVXwdiyGQJ3y63H0QxNr7bDBifeUmm04pXMigqgc70dAqei3xdbji61s6hc%2BGCn1M9dMawvjOVWkr7RdKTIyw9cRviFS8hYHEY8%2BMElAS4vpHgbYJpL7DPpVX6TQbfB2SJhXCCMkOjBS4lkkAWb1%2BZv1kKvk8QzyZqT&X-Amz-Signature=01a571e166caaf4e5437515ddddc762827567d622fa5a48befa3d7ebc185a3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVL3TRWY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHWwUPq42AD%2BO4y7FLrLrifjQxP6w2lrRyuc%2Bw942SRIAiEAgRYDJmqDC4EYAeutZQ2b52Zr5U9jM6Gqb0bwmRDVgcQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDCCySPWTFskWoj6uyrcA7Y2rTmm95C4A6HL8vjVFRzFoN0ssicrZW00FPjtV3qg0o7TR6Mf2Rzit5coMScCmGPpogtWuKptbBgI%2BBlvlwr5Ee4LJ4%2F7g3i0L3At2l0ABuVkEKgakKlMc0V8Hv2MoJ57U4w%2BzVpluwsJrdUzjBKiEKe8f%2BPB68jPmi8CZCbaDiENDYrsRHWfU1QwDTQP%2Bv39mKYo9aKMK5j2OvGPw%2BFxre%2BIn5sFmy4eic2b6mWWR5H5hkYC2StJtStpL5xt11aRiQ85hFgdfpVFQwDWemVCZv1um%2B3%2FXCiNQMlVZBnHw6IpmG7v0XhvqitdkA50WX8%2FVovz226PgHwUK4qLlZu13KtEyMvJ%2F8OYbEPcwGSPBX3AQrXyfc15ZasCT1ahEDZ%2B%2BMUDRzI3Jy71V%2B4RWBbjB%2BypIIA72yWBbbiMDjLUf7oiQjPymFWU10B0gIkKeH2V5SEngIxxoaAMkg0rdY2ENQvFXIYVNvREypqM9MDLLPn3NXZ50NEXHpWyryCkiMkCK%2FDO0RbZtGsl%2BGYYbR6PNY3dCaAe60XNmSv0mYZQry%2BMrIQeYGsImeRd5mCY3lKhGfN5osRBzWrSLfV7uC%2BIJ7cGHqJsx2yuWqKGr6ti6JP6hUiUWG%2BbzoLkMMbVw8kGOqUB9%2FKm%2Bml7rujITrWDDnFbRE9wrLIzekiX%2FGz9zkbMHzj4TrATof44D%2FrXJVVXwdiyGQJ3y63H0QxNr7bDBifeUmm04pXMigqgc70dAqei3xdbji61s6hc%2BGCn1M9dMawvjOVWkr7RdKTIyw9cRviFS8hYHEY8%2BMElAS4vpHgbYJpL7DPpVX6TQbfB2SJhXCCMkOjBS4lkkAWb1%2BZv1kKvk8QzyZqT&X-Amz-Signature=8e414bb70391732837bf5d1c05be12e9733881204ae7f6c107079fa61289f0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

