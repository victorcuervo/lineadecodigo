---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2EF2H6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGvkOOXsr8nTS0PId1iLuhzfa5a2sJuOIni9G5oCyYgAiAdQGNKgotW3kb2bfRLOLxEv17KywcD3rco2xHQijlaTyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqBS4%2FRGt%2FtzGEUWnKtwD2TB6s48%2FwYKgS9Fjs%2FgLhH0P%2FJ62rHZE76SGWWz4tOtHPxqiavkaAuieozYG0zVT%2BJg1B%2BSXjIfAaQ5RaHHZfbuwUSCPX0yIqB%2F3k%2F%2BP2F90ufnlPA4KpXaBKUWHUZYkdZwAYFfOAKrh3T9xcQGWnNI4WOMuaDtZSCKRwQnud%2B9BIsHLGMkGIPYOpridRVfKtKfC2hq56D1qJaxkif9lkTnkFFgeHS%2Foah9Mdj8cQTy9%2FBG%2Biegnvkq56c%2BjE71rP91c6kPJ7kGWR1SE0yRGLwrA7Edq3%2BQAhUImFkbvciDHj5xENQUgiKNuNqveThU%2FNsBoU2fct3Dyiiupya4J%2BRuYInN83ZXerMJVSGuyhdrsF%2BezG7WlnwQ4jVIGTZP%2Fkju7SYMU6EVQc6QT576OPhUiZv8FFvz3wz6LgsMRVF0YFCalWlewvMehuPvbbj28mSnwD9veJYh3xTPHfTXuKF3yJ9oKXSOvA9hQhtg8SXht81FkOzikhv5JsbeWv9qXR%2Ffnltuhla2pTCU%2BTwWklVqrJBoXboCsDcSWkCoHp%2BRekiXGbUJKGXVAlOHZkKAoArdFumCNAferJCLKUGpevvcRif7nKcszH20VlVw22B4lZEGxWnwovlHjKNgwsaLYyQY6pgGvhTB4E81nul5JE91Kr3WScy2bO%2F3xEkO3a9Pei14zHUD14PnanOk04HzT%2FiFz7fhRUI9ryuWfw9cIf12LMjaJuQ7FiTHKWA6NeT8VvAbZBrVn0xWeD4c%2FE4AazfG%2BP7uPyEiZQPs3R3DZMwTzCGgIDvPfoMQC1TUVn9%2FfPDFcc8GOcVXA%2F8CTpP1vUB5KOSyh5gkZmperTaF8tsWVoBpqGGKmsGC2&X-Amz-Signature=1f4b3c047ee6f5e3e49245492e7ae59eceb696d76a51ed0ed4c8b56c8fab1e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2EF2H6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGvkOOXsr8nTS0PId1iLuhzfa5a2sJuOIni9G5oCyYgAiAdQGNKgotW3kb2bfRLOLxEv17KywcD3rco2xHQijlaTyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqBS4%2FRGt%2FtzGEUWnKtwD2TB6s48%2FwYKgS9Fjs%2FgLhH0P%2FJ62rHZE76SGWWz4tOtHPxqiavkaAuieozYG0zVT%2BJg1B%2BSXjIfAaQ5RaHHZfbuwUSCPX0yIqB%2F3k%2F%2BP2F90ufnlPA4KpXaBKUWHUZYkdZwAYFfOAKrh3T9xcQGWnNI4WOMuaDtZSCKRwQnud%2B9BIsHLGMkGIPYOpridRVfKtKfC2hq56D1qJaxkif9lkTnkFFgeHS%2Foah9Mdj8cQTy9%2FBG%2Biegnvkq56c%2BjE71rP91c6kPJ7kGWR1SE0yRGLwrA7Edq3%2BQAhUImFkbvciDHj5xENQUgiKNuNqveThU%2FNsBoU2fct3Dyiiupya4J%2BRuYInN83ZXerMJVSGuyhdrsF%2BezG7WlnwQ4jVIGTZP%2Fkju7SYMU6EVQc6QT576OPhUiZv8FFvz3wz6LgsMRVF0YFCalWlewvMehuPvbbj28mSnwD9veJYh3xTPHfTXuKF3yJ9oKXSOvA9hQhtg8SXht81FkOzikhv5JsbeWv9qXR%2Ffnltuhla2pTCU%2BTwWklVqrJBoXboCsDcSWkCoHp%2BRekiXGbUJKGXVAlOHZkKAoArdFumCNAferJCLKUGpevvcRif7nKcszH20VlVw22B4lZEGxWnwovlHjKNgwsaLYyQY6pgGvhTB4E81nul5JE91Kr3WScy2bO%2F3xEkO3a9Pei14zHUD14PnanOk04HzT%2FiFz7fhRUI9ryuWfw9cIf12LMjaJuQ7FiTHKWA6NeT8VvAbZBrVn0xWeD4c%2FE4AazfG%2BP7uPyEiZQPs3R3DZMwTzCGgIDvPfoMQC1TUVn9%2FfPDFcc8GOcVXA%2F8CTpP1vUB5KOSyh5gkZmperTaF8tsWVoBpqGGKmsGC2&X-Amz-Signature=6a6dd33d2c050ff21ac0c332df8121ba2ca8d69c7d2ed2a14e03e4b605548501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

