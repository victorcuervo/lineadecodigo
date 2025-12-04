---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7UTNSL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICPoWZieTHTW6sbCI9MzBPQ6RvuReE59B26yPT7CbJhwAiEA1ZNLVmrviaiRyVIn%2FebcLeYyFORFWL2y%2B33aHoyQEI4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCv0E6nqcgmfYUS0PCrcAyBw69%2FWDdXXnj9k9w7WIylnqaLAqrKAv3RlfTmCCa11b2zm3UFFlgH3eQLc2S5JTSoXu0%2BHMX5lNJWJAir%2B3Jd%2B5oyTJ6ikKLrxU1%2BwBT0HQGPP%2FQ8xsHJw%2Fu6OyEBjTQWrd59kXqP2JgzpMoAJxOpb4oc%2FX8VIlldSJnYAvDrGvzk4nScMSH7bNYN8fTtF8%2FfAXFRhhydnjz79vTMHpvsnkVmvsK9y1srnfkGIts6Y2mxok2hqLkRcWhTigpH7hUYZKKwIo%2Fvok1sV7TrF%2B1C0aFYULJOWVe8IBxcy9J5W0RagdlaIgbcZgssFq5ZkMGv3HLSGUJ4V531zmYWX0eeezN6Pr%2Fv2pyLVvo4U2HIqUeFwuZfNgBq9AsOTksvfBSK6V8Nqfw4a67knxMbKJ9ngHoJlkKKW1pEdMGIM5z8ZQKfnm2trLhwDHq%2BCyCqM%2FoenFFsrEonSsNCe0Tu4B4D9WaWJolMNKqUEnz2pbm5FTMmoS73jawIdBmrmIYxR4jVq3iezx2qYGMlJkGA9QAim4S7d%2BG%2FxUR%2Fnu9bwVetrOmyI%2BEm%2FNmqMSaIosOytnPJJ17LrLA9cyJ%2FCF1uGNTbJwVCL7wMG1mTGomBw8HLAvWgWIbXPC1bOjH99MP2rxckGOqUB%2BM0LD5xlAs4r0L3AAJF56tRqYrTkERQEHVFx9UqAt3Yq9%2FzNvgRgfcYGiEUy2aHABbFAyhz2XF3zyG%2FMaioTThrOi9L3gT3EkqiQrROQMwXb48lK5NGptt2eiJ6n7w%2FXFM7shSVfF3gE7xD0%2FVpz7VXlHDemtJCGg8eLuv81Cx0VqGYUdO14pGtIYB2dOct77URo%2FVZeKL9uo9LbpMsUjCToul03&X-Amz-Signature=4f5e8391a4983c5e81e544683cba09cd329bf7f4ec8bd3b1b71037cbdbd377e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7UTNSL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICPoWZieTHTW6sbCI9MzBPQ6RvuReE59B26yPT7CbJhwAiEA1ZNLVmrviaiRyVIn%2FebcLeYyFORFWL2y%2B33aHoyQEI4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCv0E6nqcgmfYUS0PCrcAyBw69%2FWDdXXnj9k9w7WIylnqaLAqrKAv3RlfTmCCa11b2zm3UFFlgH3eQLc2S5JTSoXu0%2BHMX5lNJWJAir%2B3Jd%2B5oyTJ6ikKLrxU1%2BwBT0HQGPP%2FQ8xsHJw%2Fu6OyEBjTQWrd59kXqP2JgzpMoAJxOpb4oc%2FX8VIlldSJnYAvDrGvzk4nScMSH7bNYN8fTtF8%2FfAXFRhhydnjz79vTMHpvsnkVmvsK9y1srnfkGIts6Y2mxok2hqLkRcWhTigpH7hUYZKKwIo%2Fvok1sV7TrF%2B1C0aFYULJOWVe8IBxcy9J5W0RagdlaIgbcZgssFq5ZkMGv3HLSGUJ4V531zmYWX0eeezN6Pr%2Fv2pyLVvo4U2HIqUeFwuZfNgBq9AsOTksvfBSK6V8Nqfw4a67knxMbKJ9ngHoJlkKKW1pEdMGIM5z8ZQKfnm2trLhwDHq%2BCyCqM%2FoenFFsrEonSsNCe0Tu4B4D9WaWJolMNKqUEnz2pbm5FTMmoS73jawIdBmrmIYxR4jVq3iezx2qYGMlJkGA9QAim4S7d%2BG%2FxUR%2Fnu9bwVetrOmyI%2BEm%2FNmqMSaIosOytnPJJ17LrLA9cyJ%2FCF1uGNTbJwVCL7wMG1mTGomBw8HLAvWgWIbXPC1bOjH99MP2rxckGOqUB%2BM0LD5xlAs4r0L3AAJF56tRqYrTkERQEHVFx9UqAt3Yq9%2FzNvgRgfcYGiEUy2aHABbFAyhz2XF3zyG%2FMaioTThrOi9L3gT3EkqiQrROQMwXb48lK5NGptt2eiJ6n7w%2FXFM7shSVfF3gE7xD0%2FVpz7VXlHDemtJCGg8eLuv81Cx0VqGYUdO14pGtIYB2dOct77URo%2FVZeKL9uo9LbpMsUjCToul03&X-Amz-Signature=c544029d61324576fe9dce1f63c0376e5585a46ceeb84a26345e20f43c1b324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

