---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUCFRHG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDbofrXt5Sqea1FMBsuvireutJhmz8k48FtBdgyDnbxAAiEAs5C1F9JA1Lk5ZqFhlVCvGzV1xH2JmtRrftrQsPc4SPoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAK31EVaf%2FFQZobs1CrcA3F3GwtLKUgCp52wJF35Y9jtiNoHGh7ssUkpsDvjScdJVaI0LBtIn9SsmRZLeQ9xtbVR279ersd6m5YfMqnKDyXY9ilc5CPddZBNxXe%2B3tH96wjM57%2FIUT6Uqj5oGoEKRjRGLpenV3npOYzDxdjzkArofAGGN897QAQwnUrc%2FHsQ3oAJV8yGuf4GjvOGBigG9DvajVo4hBjVkM4DVCaG8XW3Xx0HMrF1uM0W9NNFtVILByFWJz9WK0jBAxqoPOqRjXUO5e18yPtwgHV9oAhpyQuM%2BO5i%2FMHUle8DE9k%2B9QvON7DNZuFHZk0K9tfkdivBGuLyPdw74oT8cP3VIQbkMOtiH0i3d6bgO%2BvEi8Vg3Iqq9uFHCgbfva9DLpaimqTzhJO4BptrUb2VMqDeCxK1AcAEg6a4FxrUIn3EPL3EEffl48rDpik%2Bprwikop%2BnI70fpY3OoOE5iMC%2FC%2B2Ur6S5RWSeD5VMr7GmgT%2BDHPQpjTLuMPIHKVXBTXUyAM3p%2FtPt%2FG45u9xF%2BVOOiQpLHNmW1%2B%2B2e%2FMdrrAlcM9x3hVIUdxaUGM0JWrAIRoe18iG1Nm13Nf%2Bt0CiEiP%2By9q2sNpgue%2FCZZYC5eTVjYReJKmYjPkBhFw%2FOGVfKKrMAJkMKrcwskGOqUBnU1BPp0kM5aD2toHcUq%2Bo2JmnG9%2FNSTWwlOzWfeojxQhO0e1Uh4nFy%2B38BCi%2BbvM0v%2Fr5ML5RjDW%2BhpoiTnbJs%2FxS5ijg9LycvclV0o17zcrmLAlR2FntTFEZOSMPyrYdFztPLQuk5KTaUJK%2FFgchF974pvuZDsdOVkyGC3HGYJqifEMyEHo7l6ZqDRafRMUVlTIFACSmV%2F8ovdWKFZ9E7ALSHva&X-Amz-Signature=ff686728a8c0c4a0ff2790e33a304539dff88266984a2f7dfa546f7a802fbb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUCFRHG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDbofrXt5Sqea1FMBsuvireutJhmz8k48FtBdgyDnbxAAiEAs5C1F9JA1Lk5ZqFhlVCvGzV1xH2JmtRrftrQsPc4SPoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAK31EVaf%2FFQZobs1CrcA3F3GwtLKUgCp52wJF35Y9jtiNoHGh7ssUkpsDvjScdJVaI0LBtIn9SsmRZLeQ9xtbVR279ersd6m5YfMqnKDyXY9ilc5CPddZBNxXe%2B3tH96wjM57%2FIUT6Uqj5oGoEKRjRGLpenV3npOYzDxdjzkArofAGGN897QAQwnUrc%2FHsQ3oAJV8yGuf4GjvOGBigG9DvajVo4hBjVkM4DVCaG8XW3Xx0HMrF1uM0W9NNFtVILByFWJz9WK0jBAxqoPOqRjXUO5e18yPtwgHV9oAhpyQuM%2BO5i%2FMHUle8DE9k%2B9QvON7DNZuFHZk0K9tfkdivBGuLyPdw74oT8cP3VIQbkMOtiH0i3d6bgO%2BvEi8Vg3Iqq9uFHCgbfva9DLpaimqTzhJO4BptrUb2VMqDeCxK1AcAEg6a4FxrUIn3EPL3EEffl48rDpik%2Bprwikop%2BnI70fpY3OoOE5iMC%2FC%2B2Ur6S5RWSeD5VMr7GmgT%2BDHPQpjTLuMPIHKVXBTXUyAM3p%2FtPt%2FG45u9xF%2BVOOiQpLHNmW1%2B%2B2e%2FMdrrAlcM9x3hVIUdxaUGM0JWrAIRoe18iG1Nm13Nf%2Bt0CiEiP%2By9q2sNpgue%2FCZZYC5eTVjYReJKmYjPkBhFw%2FOGVfKKrMAJkMKrcwskGOqUBnU1BPp0kM5aD2toHcUq%2Bo2JmnG9%2FNSTWwlOzWfeojxQhO0e1Uh4nFy%2B38BCi%2BbvM0v%2Fr5ML5RjDW%2BhpoiTnbJs%2FxS5ijg9LycvclV0o17zcrmLAlR2FntTFEZOSMPyrYdFztPLQuk5KTaUJK%2FFgchF974pvuZDsdOVkyGC3HGYJqifEMyEHo7l6ZqDRafRMUVlTIFACSmV%2F8ovdWKFZ9E7ALSHva&X-Amz-Signature=076151cb11d7bdabebe9324461757e7b7dc071e1ef913156da769e573bfb8d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

