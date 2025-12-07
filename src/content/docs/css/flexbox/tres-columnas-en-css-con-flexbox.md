---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJRMDVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLCPLvEX8m6ZV0kxMoSMCKewS48D9PyJ6ORBXEAQbcygIhAKe1FrCfoHmkwRzn8Co7grKJArP%2F7qzjUp2Yf5djTcZLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm8TScd%2FOdQZgsgmYq3AOtc27iaKrCWsyQZut%2FgoF7eG9k%2BbmaoDZKGDf084aa09wtNVYuTakioZN1WzZV3JaImJHSai4o402BVahwv%2BuhdZFXtERHrjcUYaVDIC%2BpvTtYfa%2Bcpj5VoAH3N06p8LjdOfjumD0U5bInQI6%2F7IkpffqbG%2BQrPAY6TmaQK6FKo8XTtiD0Wfef8Zdch57o35DPKhO3hrrN%2BVH4XwVm6E3xrg6KMuuBC0nK2%2BDJKkiIdrUYBICGFixtxyoLwMsIxqSbV%2BqOLrOkqwmx3mJj%2Fj5HDgs2do5xz6%2FCtWuz%2B9qgdCGIp%2BvuC3xgeA%2BErypO4oNPR4dpD%2FjInqyUwTLQSgCrRHoPOtV3iFoTauZATzYEyOkjZ2psL663IJd59%2B7IsDcaoxxC3ETnoTl7YtQNyBpqEkCJFrkeKrevOGGhuzECfvhsEuADt2uk6jFUfGz%2BWOZnyNKRRX3j6ZTWMejz0iDTS9aMxB7RF5%2B%2Bmp242eVdCNEY%2FfZGHPP5QteiYcd6XJbBjKmMhhJVTjidMEkj%2BS0%2FQKjVW5vjum3fkgybsz5H5vl0Pu%2FyS9wd82K0kCz%2FLMxtQk2T7MrCOIdcHCCglyMWDTAC4wQ%2FpWBZ1bpKgPuh%2F26KWLUy9opz4IzgyzCt%2FtLJBjqkAdLBtFaO%2BIFKeepOWZpz%2BrJkvK0Y1iqmqzmN%2BezWz2v8GchMmehKzjILUHVHsTW4EwPOfMPR1peZWQfod8zJ7nJ5F0FAYjGP2ngEP4eqTKMSS2NrD82dT63H75n9NnaQUSG8Ttw7PGY0LaJfVbvXpY7n0GYsC%2FfqAZEnEqcNreg%2B29MIngTN7rL08XbGUQPDX5S0a5MnTE3l7G6PCwnQLTJ39q10&X-Amz-Signature=4181a96b5ccadaf0831d3ab6d413079f01b1a5842b081244107febabb5771d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJRMDVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLCPLvEX8m6ZV0kxMoSMCKewS48D9PyJ6ORBXEAQbcygIhAKe1FrCfoHmkwRzn8Co7grKJArP%2F7qzjUp2Yf5djTcZLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm8TScd%2FOdQZgsgmYq3AOtc27iaKrCWsyQZut%2FgoF7eG9k%2BbmaoDZKGDf084aa09wtNVYuTakioZN1WzZV3JaImJHSai4o402BVahwv%2BuhdZFXtERHrjcUYaVDIC%2BpvTtYfa%2Bcpj5VoAH3N06p8LjdOfjumD0U5bInQI6%2F7IkpffqbG%2BQrPAY6TmaQK6FKo8XTtiD0Wfef8Zdch57o35DPKhO3hrrN%2BVH4XwVm6E3xrg6KMuuBC0nK2%2BDJKkiIdrUYBICGFixtxyoLwMsIxqSbV%2BqOLrOkqwmx3mJj%2Fj5HDgs2do5xz6%2FCtWuz%2B9qgdCGIp%2BvuC3xgeA%2BErypO4oNPR4dpD%2FjInqyUwTLQSgCrRHoPOtV3iFoTauZATzYEyOkjZ2psL663IJd59%2B7IsDcaoxxC3ETnoTl7YtQNyBpqEkCJFrkeKrevOGGhuzECfvhsEuADt2uk6jFUfGz%2BWOZnyNKRRX3j6ZTWMejz0iDTS9aMxB7RF5%2B%2Bmp242eVdCNEY%2FfZGHPP5QteiYcd6XJbBjKmMhhJVTjidMEkj%2BS0%2FQKjVW5vjum3fkgybsz5H5vl0Pu%2FyS9wd82K0kCz%2FLMxtQk2T7MrCOIdcHCCglyMWDTAC4wQ%2FpWBZ1bpKgPuh%2F26KWLUy9opz4IzgyzCt%2FtLJBjqkAdLBtFaO%2BIFKeepOWZpz%2BrJkvK0Y1iqmqzmN%2BezWz2v8GchMmehKzjILUHVHsTW4EwPOfMPR1peZWQfod8zJ7nJ5F0FAYjGP2ngEP4eqTKMSS2NrD82dT63H75n9NnaQUSG8Ttw7PGY0LaJfVbvXpY7n0GYsC%2FfqAZEnEqcNreg%2B29MIngTN7rL08XbGUQPDX5S0a5MnTE3l7G6PCwnQLTJ39q10&X-Amz-Signature=3235119401f10975aef4de5831433fe2b5243b5706dc9c010f804377c1fec919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

