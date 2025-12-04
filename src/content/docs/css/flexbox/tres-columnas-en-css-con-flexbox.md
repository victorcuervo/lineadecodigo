---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPD6B43K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGIfgKXpATlM%2Fp%2BqUOqPHQSb6%2FkmNucF0GFJqlpnzrNMAiBGpePZDqLmg8pUJ1heswhRUu2VVKSLX5m1MplhQGzdKCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgWQwHJko04H8ZST7KtwDs%2BQEgqF%2BwGWR5MPROJh%2FwGIVV5Y1ivZ%2FkEYyN%2Bl5oW05o779rOW8d8dkw5s7lkSZhqnBTxMRusJL2iEUVwQGeJXWy1lFL0j7%2Bkvd3qRiAgaxwiuLR9WI4OZgrvzNDdjcV7tccihbSW3dd1BffXvsi2zf%2B%2Bp9ZwFWu27yoRs3kmalV%2BLxpk%2Fzrlun6H%2BG31EcMxxLaCDqQ%2F27ienAkDSsOWExcrdBbLhnfKBpSwiLqq33pgkNuriry9K%2B1lB4A5lgqGjvcdUuYgQmtsM3lUggvMxvC%2FfvvqF9WuZgL0l1XJ5bVxVGYbpcYj7WsoBUrpBPsyHrzDoBznpRpB5t1wwEMbgRm%2FOpXtu3pwgOTfeDndhQAPOKctKpGAwJISdAmq7Aher0GFoKeKPc%2FD1anBKIiEoDqp%2FMOsO3UUO8tJY2ytxQ0K9H%2FkH5Owzr29hoPtmYAzza5T8k0z39Gfk1QmRh2yjdbdqZGsFKQkO7WS1i5XM395cryWN6SX1rSwKd9gNe36JalPJhqEZ93PsO4gQ2zc3ZIwKdkl88guaKKsEZQhmShwuIbyw8PoiKsoPSliv38PoiNcbdlefpicd%2FlC1TMYxYZxKyXW6toh28H5iQ1g5kPAgifHsA429arXswhobFyQY6pgFakqy%2Bu8I%2Fuz26m9yQuUcAnvTiFnxum0DCWAtvVUnmCNln8KDOkP7a609H%2FLJn3btREtZ4FpN3aUpV%2BQJYGRHzjdJN8%2FfWjGgqyM1mIBB7Z3HlPdtmoWLBChqq6sGcWHjal4Y4jK2wMYn9piFoAv%2BPu1NABoy3xW4UFJwLEGYA4sQYH67KCPTREixG1vaAITJ4Qhwt99MiWm%2FwSBBvt7m%2BiIB4OQwL&X-Amz-Signature=513d99ffb1a8766007fcf304fff65bc6534f91fe25371948b73bd1c9427c763a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPD6B43K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGIfgKXpATlM%2Fp%2BqUOqPHQSb6%2FkmNucF0GFJqlpnzrNMAiBGpePZDqLmg8pUJ1heswhRUu2VVKSLX5m1MplhQGzdKCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgWQwHJko04H8ZST7KtwDs%2BQEgqF%2BwGWR5MPROJh%2FwGIVV5Y1ivZ%2FkEYyN%2Bl5oW05o779rOW8d8dkw5s7lkSZhqnBTxMRusJL2iEUVwQGeJXWy1lFL0j7%2Bkvd3qRiAgaxwiuLR9WI4OZgrvzNDdjcV7tccihbSW3dd1BffXvsi2zf%2B%2Bp9ZwFWu27yoRs3kmalV%2BLxpk%2Fzrlun6H%2BG31EcMxxLaCDqQ%2F27ienAkDSsOWExcrdBbLhnfKBpSwiLqq33pgkNuriry9K%2B1lB4A5lgqGjvcdUuYgQmtsM3lUggvMxvC%2FfvvqF9WuZgL0l1XJ5bVxVGYbpcYj7WsoBUrpBPsyHrzDoBznpRpB5t1wwEMbgRm%2FOpXtu3pwgOTfeDndhQAPOKctKpGAwJISdAmq7Aher0GFoKeKPc%2FD1anBKIiEoDqp%2FMOsO3UUO8tJY2ytxQ0K9H%2FkH5Owzr29hoPtmYAzza5T8k0z39Gfk1QmRh2yjdbdqZGsFKQkO7WS1i5XM395cryWN6SX1rSwKd9gNe36JalPJhqEZ93PsO4gQ2zc3ZIwKdkl88guaKKsEZQhmShwuIbyw8PoiKsoPSliv38PoiNcbdlefpicd%2FlC1TMYxYZxKyXW6toh28H5iQ1g5kPAgifHsA429arXswhobFyQY6pgFakqy%2Bu8I%2Fuz26m9yQuUcAnvTiFnxum0DCWAtvVUnmCNln8KDOkP7a609H%2FLJn3btREtZ4FpN3aUpV%2BQJYGRHzjdJN8%2FfWjGgqyM1mIBB7Z3HlPdtmoWLBChqq6sGcWHjal4Y4jK2wMYn9piFoAv%2BPu1NABoy3xW4UFJwLEGYA4sQYH67KCPTREixG1vaAITJ4Qhwt99MiWm%2FwSBBvt7m%2BiIB4OQwL&X-Amz-Signature=968fb1905054e67ad86d82aca7e93598e7c502c7446573456df73a863391b05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

