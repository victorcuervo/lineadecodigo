---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3F4VWL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBhnexLqiopgncGZGJ9XFgLD01k7haorVB04PhzqfBMAiBxM0P75gX1d9FqzEMb5Mmwar1PJQ6VK8mCVreC01zyCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMusL0H3TT%2BdtfcOfIKtwDWORimhdhZzqSLlaGwJOgYG5pQ300ABB91lzrIj%2FsgOhku9rC3aG4dg%2Flz4IGO8yIaaQyYRHYsv4CQqbBbQ756mGW72UU99Bo8HBuI84Q7etq8cR4PHkmZicY0OURe%2FiDllWsMQRSIRjsKAXu0Rb7hOlDkfSxNkO27zcsvwU9NUgRJaW0B8J824YAhavCkqYSoURS9z9QW3X3iWP6OmqLwPGRKHywZFXASnY2kZhn9NPgDevy0OKTj18zumQB2EMKzaf%2FcsxC3ASKaR9GKK0x1tJ1qW7zvZkDuCvZE5a4FxiCZTl4%2FlAyjRh57m5djtXTLYuS5vCask81QFENAqe4A00CFPc9oPu%2Bz%2BM5VMQ1nNd9S8wrRpSgZI7eiGFlvXKYSSRL1I2zj93EVTzdTU1jFX3lw2WA7oI3fRyVXuyY0KSMbPM8hzp%2Bv0fe8NyFVklB%2BCEhpzfI9uWElFP%2Fm4RtCghAz7zhPoa2ahm9SnGkhDWthkZ47dIcyKBYU4edOXB1zeWh49w6V7SVfZMXwrfARXIcMiBAQs26vtpu7Rf%2BWPWMfgM3B%2B2%2BO1wunJtsGv0davFHx0W6e2ltHc1PxSG93fdgP0w%2BMX3ww7WHeFj4iK95EYEPKRW3GhZYHOYw5dzGyQY6pgE%2FbPVRaz63aO7zzfZp0xR3SbcTsBabpor2K3LnkMh43Ssx5Wui2dzwXXJt%2BNlOge3U21kSbodT%2BtusTbfRIwPvPNXC1LFIZMJRbB32fujCNti6JeNzzgLW%2BJBuBvp27MdhilWZV5GhsyJqZzwKFEQToBDJg72grarCyXlh1YwAnppFEX4DZgytggiqUWmvETfB%2B0fMGe87%2B%2BAfTsbd8EUjLMZRaN9L&X-Amz-Signature=58cd735a843a3de53b0787182cbced6fe576b9bd33767bb8ab895ed4d11302c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3F4VWL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBhnexLqiopgncGZGJ9XFgLD01k7haorVB04PhzqfBMAiBxM0P75gX1d9FqzEMb5Mmwar1PJQ6VK8mCVreC01zyCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMusL0H3TT%2BdtfcOfIKtwDWORimhdhZzqSLlaGwJOgYG5pQ300ABB91lzrIj%2FsgOhku9rC3aG4dg%2Flz4IGO8yIaaQyYRHYsv4CQqbBbQ756mGW72UU99Bo8HBuI84Q7etq8cR4PHkmZicY0OURe%2FiDllWsMQRSIRjsKAXu0Rb7hOlDkfSxNkO27zcsvwU9NUgRJaW0B8J824YAhavCkqYSoURS9z9QW3X3iWP6OmqLwPGRKHywZFXASnY2kZhn9NPgDevy0OKTj18zumQB2EMKzaf%2FcsxC3ASKaR9GKK0x1tJ1qW7zvZkDuCvZE5a4FxiCZTl4%2FlAyjRh57m5djtXTLYuS5vCask81QFENAqe4A00CFPc9oPu%2Bz%2BM5VMQ1nNd9S8wrRpSgZI7eiGFlvXKYSSRL1I2zj93EVTzdTU1jFX3lw2WA7oI3fRyVXuyY0KSMbPM8hzp%2Bv0fe8NyFVklB%2BCEhpzfI9uWElFP%2Fm4RtCghAz7zhPoa2ahm9SnGkhDWthkZ47dIcyKBYU4edOXB1zeWh49w6V7SVfZMXwrfARXIcMiBAQs26vtpu7Rf%2BWPWMfgM3B%2B2%2BO1wunJtsGv0davFHx0W6e2ltHc1PxSG93fdgP0w%2BMX3ww7WHeFj4iK95EYEPKRW3GhZYHOYw5dzGyQY6pgE%2FbPVRaz63aO7zzfZp0xR3SbcTsBabpor2K3LnkMh43Ssx5Wui2dzwXXJt%2BNlOge3U21kSbodT%2BtusTbfRIwPvPNXC1LFIZMJRbB32fujCNti6JeNzzgLW%2BJBuBvp27MdhilWZV5GhsyJqZzwKFEQToBDJg72grarCyXlh1YwAnppFEX4DZgytggiqUWmvETfB%2B0fMGe87%2B%2BAfTsbd8EUjLMZRaN9L&X-Amz-Signature=048efaedc057d3e3bfe5bcc64fce9f80dc4f43aac7e74aae2267069f1d09f2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

