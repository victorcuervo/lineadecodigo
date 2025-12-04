---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R576WZH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD2WnPdU%2F2AagJdEf49QWrF3%2BVpHuOGT8PMxQy%2Fqv4lmgIhAMhIUUgZ6uZ8Voa92zBqlGPnMPUwpF7H8EDy6YZcDskdKv8DCD4QABoMNjM3NDIzMTgzODA1IgyD%2BmABvn51BjUAstYq3APXQRdVpgiwFLUCTWlZcs6hfjT5nTTdow96wbKSUZXRGl0vN1p6xDM3L32C%2Fmf9s1qWgmDjpoAGcQd5j88tF8YUL64katf7vZetHdMFDDPLxCSukglhEMYc%2B9Fy5iI4g38zq4VNPQO3kcZR94KyB1pKh3E%2BXRDKP86GDEhVWumk6moCBzNxnZPjJOymnqepgrL%2B2HhGyciGyfRLC6HqiOoNJm3TMrcjIAGJmMwEO6iL8zUEvz8VrGYU%2BXm%2BbX%2ByKipQu8Re7eRCzwLQA4rPG3ge3c0z9UsCwySlO%2BhPOGY89p55HjBhjJm2Z83cZCE4udlxKMXSfNSkAQGbp4GEWN7GuRrcYUq%2ByYF%2FrWgHcmQDD7ds1T5DqICpqMguPGezW2%2B%2BlkKxBT0cxQSffnHTwPnqFiUjJnLl1hcPMBdmd8vv%2BrhoW9boE%2BzoKudcd%2FhzZ97Hxw18KHcADhyDdL41bzr9Qw%2FkNw6Qqvivc1IWOwa2sUpYRFUJG3qN%2FRTj2uMfW4DkF5BKZ1GSXBrkTtC20VP7aiIz%2BjbIbGMhA9BOapQej7x59iA639oaou11bDPSEjJZXf1V0qKwXEhUdJtKLNn2VH4ygsYs%2FWkxdVHsWL%2Fgqft1ZKUQDPy3mtmERDDTrsTJBjqkAQVpo1hYD4T4eKb8r%2Fp8XRePqYvStuIhZN%2BCiZaVI5wJ1fj9Fpb25AKeK2BwDPu5ALoqszDXow9%2FUd2W%2FKILuYtYPftO5TPDiPvsGjnUVUqMueApynR800qv2HftlUTE841kUz5aMB2t5FD3VwXbFkfO7cqcZuZo1uoltku1Mjc0%2BGixOsmV2Mv0ZsAJoKuguvGmgbm5jcixOMCYLR4aOiTNj1my&X-Amz-Signature=f069c415da764c5fe6413b9062ec9d2009d19bb0ca06a5fa23682f3c9ada7689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R576WZH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD2WnPdU%2F2AagJdEf49QWrF3%2BVpHuOGT8PMxQy%2Fqv4lmgIhAMhIUUgZ6uZ8Voa92zBqlGPnMPUwpF7H8EDy6YZcDskdKv8DCD4QABoMNjM3NDIzMTgzODA1IgyD%2BmABvn51BjUAstYq3APXQRdVpgiwFLUCTWlZcs6hfjT5nTTdow96wbKSUZXRGl0vN1p6xDM3L32C%2Fmf9s1qWgmDjpoAGcQd5j88tF8YUL64katf7vZetHdMFDDPLxCSukglhEMYc%2B9Fy5iI4g38zq4VNPQO3kcZR94KyB1pKh3E%2BXRDKP86GDEhVWumk6moCBzNxnZPjJOymnqepgrL%2B2HhGyciGyfRLC6HqiOoNJm3TMrcjIAGJmMwEO6iL8zUEvz8VrGYU%2BXm%2BbX%2ByKipQu8Re7eRCzwLQA4rPG3ge3c0z9UsCwySlO%2BhPOGY89p55HjBhjJm2Z83cZCE4udlxKMXSfNSkAQGbp4GEWN7GuRrcYUq%2ByYF%2FrWgHcmQDD7ds1T5DqICpqMguPGezW2%2B%2BlkKxBT0cxQSffnHTwPnqFiUjJnLl1hcPMBdmd8vv%2BrhoW9boE%2BzoKudcd%2FhzZ97Hxw18KHcADhyDdL41bzr9Qw%2FkNw6Qqvivc1IWOwa2sUpYRFUJG3qN%2FRTj2uMfW4DkF5BKZ1GSXBrkTtC20VP7aiIz%2BjbIbGMhA9BOapQej7x59iA639oaou11bDPSEjJZXf1V0qKwXEhUdJtKLNn2VH4ygsYs%2FWkxdVHsWL%2Fgqft1ZKUQDPy3mtmERDDTrsTJBjqkAQVpo1hYD4T4eKb8r%2Fp8XRePqYvStuIhZN%2BCiZaVI5wJ1fj9Fpb25AKeK2BwDPu5ALoqszDXow9%2FUd2W%2FKILuYtYPftO5TPDiPvsGjnUVUqMueApynR800qv2HftlUTE841kUz5aMB2t5FD3VwXbFkfO7cqcZuZo1uoltku1Mjc0%2BGixOsmV2Mv0ZsAJoKuguvGmgbm5jcixOMCYLR4aOiTNj1my&X-Amz-Signature=f61f6d177a1522c3ffe0bba22516bc256784ca89dfac1f338db33732bf673085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

