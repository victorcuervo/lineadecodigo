---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGXQ6JJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdSZxc8ZYDJUOA8%2FAWdwdmDwof%2Bk7%2FBfXv%2BjR7tNsxKAIhAKWI%2BdjwyPeZN%2BW8YNNUoKgpv9vXDsJ4gEPq7TiyhcBDKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJoe9FmmkPjCOwV%2Fkq3ANF%2BtMHr8gEVvE0Ohrtd4wA9Mfr7%2BxX7u%2F8DryKKSW%2Bk%2B5AekotgpGMhCz4QjLrOdREH9QpWDfbLDUFq6o6EMrnCBQ9PTxGBY8KGAQ0WkI3Y9%2Bb6Z9uJBHXSTkpA%2FkGwzhOqwNCi5vUXRgHMEXgW3maBktYY8qE2eH2p6YoLphuzYMMDxHBrJ%2Fat3pOd0zo%2BS1D1ojOdB7VKSSnUZPj2T2xWbK%2FX%2BTUBuQMasG8GRoxG%2FsRA5HMfZosZ1YdV8MQqrc%2BlT1eISE6qi1kIc7ZO0RJ%2Bmpeox4cJHmi%2FFgvtxD89%2BbUB4bPtP0tXB8ktTEtGj%2B4mkk9X8q7kXq8gpmUeltPsA%2BFiz8u9%2FkiIpzlERy8zSJZN2FLDIrJqeun71FMF8RDLlF12U1pYZts22kKPBFslhR5Qlxut2pNekwNB2kqqOkhUc%2Bu4zLoPEUGqNxY4SmbOJT%2BNqv6i%2BD2uZ1cPJSrmg1giJ0MD6cwCuzhMc4BHoTNSjjLfELoep9xLcuMfl%2BvCh33wOd961XXkxmiqI1THWxluDzq71BfhM%2BNo9HQ906acNmcOmjXGFyfby4DIh0oRd%2BvTWNTWiJtMg4qO%2BH9XbVcEyTLEWBddLn%2BOLwBi3xB3JA6dcLqQvqo4jCD7tnJBjqkAT6tqrvs7BWXYHe%2FcaS6Ixw5SdRW2V7DeNuXJFqFxoxLKl0zeVuEgyPks2TIp3xXq1n3d%2BHf4g0urrhORAmaXeymhYZjLqQ3JHdmUoVmZx33bu2YAIdRntDTKtvRrZIKYnGPEwcHePVgWhTuwaPNkZJadR4LfaqNKlZh61TIt7rVqlLRELgKqf4%2B4Z6P1ZAoMN%2FizzKcXSkFYRCI2diL%2BxKEBNNy&X-Amz-Signature=127ed68727a0c5d68614705694d02b2294e8905d20a2781f3f8da1b8266193d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGXQ6JJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdSZxc8ZYDJUOA8%2FAWdwdmDwof%2Bk7%2FBfXv%2BjR7tNsxKAIhAKWI%2BdjwyPeZN%2BW8YNNUoKgpv9vXDsJ4gEPq7TiyhcBDKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJoe9FmmkPjCOwV%2Fkq3ANF%2BtMHr8gEVvE0Ohrtd4wA9Mfr7%2BxX7u%2F8DryKKSW%2Bk%2B5AekotgpGMhCz4QjLrOdREH9QpWDfbLDUFq6o6EMrnCBQ9PTxGBY8KGAQ0WkI3Y9%2Bb6Z9uJBHXSTkpA%2FkGwzhOqwNCi5vUXRgHMEXgW3maBktYY8qE2eH2p6YoLphuzYMMDxHBrJ%2Fat3pOd0zo%2BS1D1ojOdB7VKSSnUZPj2T2xWbK%2FX%2BTUBuQMasG8GRoxG%2FsRA5HMfZosZ1YdV8MQqrc%2BlT1eISE6qi1kIc7ZO0RJ%2Bmpeox4cJHmi%2FFgvtxD89%2BbUB4bPtP0tXB8ktTEtGj%2B4mkk9X8q7kXq8gpmUeltPsA%2BFiz8u9%2FkiIpzlERy8zSJZN2FLDIrJqeun71FMF8RDLlF12U1pYZts22kKPBFslhR5Qlxut2pNekwNB2kqqOkhUc%2Bu4zLoPEUGqNxY4SmbOJT%2BNqv6i%2BD2uZ1cPJSrmg1giJ0MD6cwCuzhMc4BHoTNSjjLfELoep9xLcuMfl%2BvCh33wOd961XXkxmiqI1THWxluDzq71BfhM%2BNo9HQ906acNmcOmjXGFyfby4DIh0oRd%2BvTWNTWiJtMg4qO%2BH9XbVcEyTLEWBddLn%2BOLwBi3xB3JA6dcLqQvqo4jCD7tnJBjqkAT6tqrvs7BWXYHe%2FcaS6Ixw5SdRW2V7DeNuXJFqFxoxLKl0zeVuEgyPks2TIp3xXq1n3d%2BHf4g0urrhORAmaXeymhYZjLqQ3JHdmUoVmZx33bu2YAIdRntDTKtvRrZIKYnGPEwcHePVgWhTuwaPNkZJadR4LfaqNKlZh61TIt7rVqlLRELgKqf4%2B4Z6P1ZAoMN%2FizzKcXSkFYRCI2diL%2BxKEBNNy&X-Amz-Signature=01cca07f4aa4ffe753e17b3672df8cdc2720cc56322479ff3fe7bfc13e1d6f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

