---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAUXXCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDUGQPNeuUJrvUU1atbl2nHScG377Kp1FmoceKkBW6AcwIgazUt6Rvtj8T4CmKJdA7WTL9lsXZM6mNHh%2B5hfOby17sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKvMTLJJIAIwGXFmrircAzoxxeP%2FmdcTLqrVUBO0lyqf1z8ssfIRP93RS%2FPXGCkEISDR78%2F4i%2FXt4SWez8KdL5uZkw0BOHR9pqbaBazvs4exDXXc1Lthe59Qj8KzUvztmpHNHhh6BOIsPRN3zfZ0TNuP8lb2UTuibvlwNRpLQQeQhoAd2Dnm0q4fPbY2yByTHV1gPdV1wfn8iDBN%2BkO93PeNA8O%2Bkwyq%2Fzq%2BfWzsO2cfLCHPTQvME9XJUPBTtjYYGIykuUGP6ebHbybb9v8OzY36jUd%2F01zuX2okHF6FN8252jJGaux9ix%2B09Kv%2FTr7hWVrwbfK9EZIs0qJ5PrdZE5ptUa0XhT7HNqTpj2Lhn3W7KlMXuM%2FWb1cBHrjgfz1HjoFxmjNBYPbQwth%2F7LgCu%2FL5P%2F3Iyu%2BhG6YU8p4ID%2B1bXZViwFMVykGajsdjdVWlElJdaY8t4nBi79Tab%2FB79ywT%2FiXZEFFlKUe2iTtn7I7vM3v2xT8kfqYMKDyUZI2cGiALDZNtOhZzrVIIjNS7fsmmtauP%2BuXTpbGHg6afd7FTiZyVAbbvQJrddiaFIkAz9AIj76NgrWIk6VWc67WcZ5LQAPIgttvANYuPX0fbJWNvTC%2BxQ3R7usXei5Hh%2FoAu8lNWQWX0pK0B6wGGMJD4wskGOqUBGOfRZLfYPOoEd%2BDh%2Bt0SA1ZiumFXXLlLRWJ0da0nE%2FbIYOKtGKQ5MPczJVd2fkaI6xc6%2FaDyQazwVsxXpH7meQmQGPLjiHPM16rTvoE4g72pVm9FxmHZ8Ep82k68W61ObGJS0I0wGWPEm3dbKtshLKcvLXOwXNFT9iXWfYy6i6n3Hx4qWAQb58WnR2VDxQydcJwljcBU%2F9fBoTnsjL%2F1gIxTfTax&X-Amz-Signature=78db617588477333334c1185ea3e8156665ad8c20a350ce4ae1712e4b57392de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAUXXCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDUGQPNeuUJrvUU1atbl2nHScG377Kp1FmoceKkBW6AcwIgazUt6Rvtj8T4CmKJdA7WTL9lsXZM6mNHh%2B5hfOby17sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKvMTLJJIAIwGXFmrircAzoxxeP%2FmdcTLqrVUBO0lyqf1z8ssfIRP93RS%2FPXGCkEISDR78%2F4i%2FXt4SWez8KdL5uZkw0BOHR9pqbaBazvs4exDXXc1Lthe59Qj8KzUvztmpHNHhh6BOIsPRN3zfZ0TNuP8lb2UTuibvlwNRpLQQeQhoAd2Dnm0q4fPbY2yByTHV1gPdV1wfn8iDBN%2BkO93PeNA8O%2Bkwyq%2Fzq%2BfWzsO2cfLCHPTQvME9XJUPBTtjYYGIykuUGP6ebHbybb9v8OzY36jUd%2F01zuX2okHF6FN8252jJGaux9ix%2B09Kv%2FTr7hWVrwbfK9EZIs0qJ5PrdZE5ptUa0XhT7HNqTpj2Lhn3W7KlMXuM%2FWb1cBHrjgfz1HjoFxmjNBYPbQwth%2F7LgCu%2FL5P%2F3Iyu%2BhG6YU8p4ID%2B1bXZViwFMVykGajsdjdVWlElJdaY8t4nBi79Tab%2FB79ywT%2FiXZEFFlKUe2iTtn7I7vM3v2xT8kfqYMKDyUZI2cGiALDZNtOhZzrVIIjNS7fsmmtauP%2BuXTpbGHg6afd7FTiZyVAbbvQJrddiaFIkAz9AIj76NgrWIk6VWc67WcZ5LQAPIgttvANYuPX0fbJWNvTC%2BxQ3R7usXei5Hh%2FoAu8lNWQWX0pK0B6wGGMJD4wskGOqUBGOfRZLfYPOoEd%2BDh%2Bt0SA1ZiumFXXLlLRWJ0da0nE%2FbIYOKtGKQ5MPczJVd2fkaI6xc6%2FaDyQazwVsxXpH7meQmQGPLjiHPM16rTvoE4g72pVm9FxmHZ8Ep82k68W61ObGJS0I0wGWPEm3dbKtshLKcvLXOwXNFT9iXWfYy6i6n3Hx4qWAQb58WnR2VDxQydcJwljcBU%2F9fBoTnsjL%2F1gIxTfTax&X-Amz-Signature=54f43d3369df8dd74d7ba4841b798017e019606703983fadd715d38c82956464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

