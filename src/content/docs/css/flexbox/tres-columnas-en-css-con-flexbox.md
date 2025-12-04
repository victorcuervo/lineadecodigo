---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7C4NE3N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIANBG8xjsdJ4br4QeBluJVouxLmwllGKuJuaEH0W%2FA%2FQAiEAi1tr9crAtMuNRNW22xkEy7xgSZoYkwX%2Bftm0in%2FQNqAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGwf8LDYFVwUIiIWCCrcA%2BWSF3R1nOU0rZar06LZA09YkElJ75ftP1Al1%2BhLMJvLxuzkdaWR%2FgerJYjBB2dYwAczRznlhwzumu%2FQLKnCowK7aYe7f2CdKjpfqeR%2FM9NTjlgBVIdb6WMgZxc3VpvfnFpAvciZrUDW6uja6dNlT9kLV1gSgJMGOGtRhUwAn50Nvx59%2Ful7tyvSDh2UiGPLEzm2n9KuhxoXYxlNagwc8lLG71DOzNaNbbSl84JMjo9Jlck37Lu6RHaJpAfm8a15kkssX7GG0JefVyRNpKEdHcudqspv9SMbue%2BA%2BwbpGnqhuf2H7HEpevsnmFGQX310XhimwMVaUNArwj1NOoeBJ8AhIHn8ZzijpXoeeg1%2F0mNC6VVmfF9sdXEzjEz0uS8pdqGpuDQv2jKssXjmhzSZLG2hASIBqwHJZgU%2BsdgrkKlUa3ff%2B4cgGVgXnbD3vjy5Cj%2FlkcI2l8Ewz2IfTwbgA8%2Fttzg%2B7CeedpxU6joqyXwf7OCHLLnph8Uul2l3atua9F2ZOyD1gTC8C%2BLNM38iGtRFZP95lLSkDHoAyRyIE%2BcuCJQ128tfjdMA%2BfEMhlWA4vQoJDlTDWzTSdtPUoRF5oFoudk5M0McLYwN1dJWCCHxHQjn4%2ByXfNMJ9R2sMJi%2FxskGOqUBONg4WfpNqdm7xdqgdWZU4e7enAa4u6dJxvynWzLzUrJ0Q5yuJLOonq1Iwq3DGIMvvm64kZTKb7hJpTe9mR3l0rnW7L4LloMUfyw2FYvjO0DZ6PgYNc4%2B1kdY42M1w%2BUlUecPmHUall0P%2B39mZ8cVPJDAp23E%2BBmKbjKUwDiahhstym5CMDtjKkxAS0B%2BRWWpjwD7OzJrpnCGREO%2B1QijbWspm9Dy&X-Amz-Signature=dc217624e110271d1c3be406b2b6dc2e491450328a5373ba692017c2d21f8992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7C4NE3N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIANBG8xjsdJ4br4QeBluJVouxLmwllGKuJuaEH0W%2FA%2FQAiEAi1tr9crAtMuNRNW22xkEy7xgSZoYkwX%2Bftm0in%2FQNqAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGwf8LDYFVwUIiIWCCrcA%2BWSF3R1nOU0rZar06LZA09YkElJ75ftP1Al1%2BhLMJvLxuzkdaWR%2FgerJYjBB2dYwAczRznlhwzumu%2FQLKnCowK7aYe7f2CdKjpfqeR%2FM9NTjlgBVIdb6WMgZxc3VpvfnFpAvciZrUDW6uja6dNlT9kLV1gSgJMGOGtRhUwAn50Nvx59%2Ful7tyvSDh2UiGPLEzm2n9KuhxoXYxlNagwc8lLG71DOzNaNbbSl84JMjo9Jlck37Lu6RHaJpAfm8a15kkssX7GG0JefVyRNpKEdHcudqspv9SMbue%2BA%2BwbpGnqhuf2H7HEpevsnmFGQX310XhimwMVaUNArwj1NOoeBJ8AhIHn8ZzijpXoeeg1%2F0mNC6VVmfF9sdXEzjEz0uS8pdqGpuDQv2jKssXjmhzSZLG2hASIBqwHJZgU%2BsdgrkKlUa3ff%2B4cgGVgXnbD3vjy5Cj%2FlkcI2l8Ewz2IfTwbgA8%2Fttzg%2B7CeedpxU6joqyXwf7OCHLLnph8Uul2l3atua9F2ZOyD1gTC8C%2BLNM38iGtRFZP95lLSkDHoAyRyIE%2BcuCJQ128tfjdMA%2BfEMhlWA4vQoJDlTDWzTSdtPUoRF5oFoudk5M0McLYwN1dJWCCHxHQjn4%2ByXfNMJ9R2sMJi%2FxskGOqUBONg4WfpNqdm7xdqgdWZU4e7enAa4u6dJxvynWzLzUrJ0Q5yuJLOonq1Iwq3DGIMvvm64kZTKb7hJpTe9mR3l0rnW7L4LloMUfyw2FYvjO0DZ6PgYNc4%2B1kdY42M1w%2BUlUecPmHUall0P%2B39mZ8cVPJDAp23E%2BBmKbjKUwDiahhstym5CMDtjKkxAS0B%2BRWWpjwD7OzJrpnCGREO%2B1QijbWspm9Dy&X-Amz-Signature=4b186c3332153d0341e8362669d99f3462b91ff35380776fd74bea91391d62d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

