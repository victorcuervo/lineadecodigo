---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUDQZCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDV68BClRPTpFXOJkLw9bF4zpIe8qdiltPMoBoAehBmywIgQPmj%2Fm28BTrDqlPMhJsKCf1dZrtLZxtQZp%2BrURwl2uEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP8%2FCi0C%2FZPpodjKaCrcAyJXztHdawh6hsvikIzcrMeXdJM%2F8q3ee12IUKBicZp83sn09xvZoDmQf67%2FHxQd5sEbGtshkSNVLJ1KVAuGoyTVwWw17OEKx69M94l%2BMpZD0RKAtobj5EmQS3%2BNbajQzlzEtIsfQN%2FBkvMKkHgFy4SJrfqyXbbagyjpYdHD323Aht%2BzUgEcVJ9y%2FyQW1e9IPFoAFE94lhQ7hV%2FCvBvWEvEafoLZQsLLfHW9lfW3hD7eINBF0%2BpFNOxMMBxa%2BpLCbgt7D1TSynryoA3%2BjKLyeEBlITqYcYXNHNW46fF2RvBpsh7rhzR9Zv845rmeysFzRFZAqCHHX8U2%2FzrKH9%2FNmFhc9t4dreIi6Yz%2F%2FGmDCX0I7AK%2BsZ54Lcl97rlFRWsa2kZmVgy%2Bacj2hbNjTMt8Gi2ZjzZiU1xEsNMI0ut78KvaKDABY3mhcDdSYgtt2gQj58IQroE05%2Bf97%2FU18zHOqlkfw3W6aPYdjhKciI95LfFJQ1gnB6yCiJSyJlSC4KlykNVo2hj4RZL8btjGqKtRdIwcQrvr60TN3%2FcjrPAfUkDxDqPEqb6ch5whKMi4gW48q1HeStasSL5EarwcfT%2BYeSXefdu0xh4Cf%2BSUKgs5o5hHEiRJ08bXv0B%2BciZ1MNfzw8kGOqUBkTg0v4bR4d6pEw9ia2Lg25m20avW4J1RAoz%2BxbOW7Hw0jZc%2FKL1Amf9FazECIAV0cYWepfFca%2BjUEf2z93clAxilWXf87QdCRs4x%2FnyIGylBfLmy0Gr%2FZ%2Fb2rwYo7JF7ruwaBhkjG4zI62JTXs4R6s1A84FeF5oiEmpqb12WFJVnStmfEDV%2Br9aODWzU9N6ssUdrgQrWl4eJZIgxBeO2dHFwVoRL&X-Amz-Signature=d52a8db00e8fe850825dafbf4ef0dfde896a1e1055566a095465dd5f9cd5bb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUDQZCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDV68BClRPTpFXOJkLw9bF4zpIe8qdiltPMoBoAehBmywIgQPmj%2Fm28BTrDqlPMhJsKCf1dZrtLZxtQZp%2BrURwl2uEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP8%2FCi0C%2FZPpodjKaCrcAyJXztHdawh6hsvikIzcrMeXdJM%2F8q3ee12IUKBicZp83sn09xvZoDmQf67%2FHxQd5sEbGtshkSNVLJ1KVAuGoyTVwWw17OEKx69M94l%2BMpZD0RKAtobj5EmQS3%2BNbajQzlzEtIsfQN%2FBkvMKkHgFy4SJrfqyXbbagyjpYdHD323Aht%2BzUgEcVJ9y%2FyQW1e9IPFoAFE94lhQ7hV%2FCvBvWEvEafoLZQsLLfHW9lfW3hD7eINBF0%2BpFNOxMMBxa%2BpLCbgt7D1TSynryoA3%2BjKLyeEBlITqYcYXNHNW46fF2RvBpsh7rhzR9Zv845rmeysFzRFZAqCHHX8U2%2FzrKH9%2FNmFhc9t4dreIi6Yz%2F%2FGmDCX0I7AK%2BsZ54Lcl97rlFRWsa2kZmVgy%2Bacj2hbNjTMt8Gi2ZjzZiU1xEsNMI0ut78KvaKDABY3mhcDdSYgtt2gQj58IQroE05%2Bf97%2FU18zHOqlkfw3W6aPYdjhKciI95LfFJQ1gnB6yCiJSyJlSC4KlykNVo2hj4RZL8btjGqKtRdIwcQrvr60TN3%2FcjrPAfUkDxDqPEqb6ch5whKMi4gW48q1HeStasSL5EarwcfT%2BYeSXefdu0xh4Cf%2BSUKgs5o5hHEiRJ08bXv0B%2BciZ1MNfzw8kGOqUBkTg0v4bR4d6pEw9ia2Lg25m20avW4J1RAoz%2BxbOW7Hw0jZc%2FKL1Amf9FazECIAV0cYWepfFca%2BjUEf2z93clAxilWXf87QdCRs4x%2FnyIGylBfLmy0Gr%2FZ%2Fb2rwYo7JF7ruwaBhkjG4zI62JTXs4R6s1A84FeF5oiEmpqb12WFJVnStmfEDV%2Br9aODWzU9N6ssUdrgQrWl4eJZIgxBeO2dHFwVoRL&X-Amz-Signature=fa4734ef40b1caefa1b676a60efd6a2aeb3b37bf655376ebf42d8eb2c3d355a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

