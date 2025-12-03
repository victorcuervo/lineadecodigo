---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NQRX5SU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBJcOtAsazt62Jz7a3GhRF%2FGtUjcskMhVgLEjFr9vSLhAiEA4VnioDU1vi9rjBNx0HmJRk6V5XnClpkbEZwyYn2%2BK7Mq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDzm9m2YHCcvHIFQmircAwLGL7IrsJqe3qrTYh5i%2B%2FGaO4QY0s1zDhomOEtExmdgZhGfcbvbGrp5mzm7wiU2LxCPSJh%2BmEzTiqG3dAv8MWbjpbeuZ7N1cpDwvAXjsNKclg0a2Ce0rcU1VumYR0k8pfDM6oMDhYV9tuGzVK0%2ByKf%2Bd7XJOVenY8QnE9lW2NG0mlfuuNVPJllYamDcB5wUyjXPGjwcSpzdmXQN4YhlTTIfQxbDDr5iA5Np1wGrXomrLpH0YoLd0IxXpc3T030yWd2QouOPM4EoYolCipCZ16HTHG1kxO19szdyUi5bnIANGKboJElMdohJBOUqvL9cy14wljKSDF0fcIxFhDqkQHNELSrUAFq0aJsvZMt6%2B4vhcdYv%2Bvyth5nay5Z5ifG8ZMVyX3GM7gY47CsxaTnuo5UzozqrwXbk9J1XxebR8csP0%2BUsdoU7nHD%2FVnum67zh9MLGDuEfRVNYraR612ESOL8jjwIcwaS5fq9imuZPd6%2BNRU4tdR4ppNapUqZzwNgdp4ZcUH%2Fbfcm9Pc%2BsiUDmYt3zb6W22ZPD4Q8N8jKITQGfILqWAgHXp5TkHwK3FQVgKiMTdf8Lw2Ac51sMf9g7m%2Btg5bpzi00VJfrTnf1gfhjT5%2BqQAEsn1q1p2wAtMKnNwMkGOqUBOegLqknqUIumnR9cPmXE1fb6YEFiaIbZhG1e7Xr6246Kj4kmjGlj%2Bjm63DOt%2BW9gMIxEL6oXengbDaBzp8U2urJ6CwnRoUxkN9z8MtOo7HOiVVIyb93SikC8HS%2Bled1DSvh%2FJgAVA3z6182fsVBc%2BRU6CK1uYeocOpMPSoCQfKoVavMYpEnH8pBzvTqCV51K1AqEJLCL0CoTamM9AOgY7l7o8x9s&X-Amz-Signature=154fbda141acdaab62a8145bbf18d76fad337048c7355805903a7e9ff6089a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NQRX5SU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBJcOtAsazt62Jz7a3GhRF%2FGtUjcskMhVgLEjFr9vSLhAiEA4VnioDU1vi9rjBNx0HmJRk6V5XnClpkbEZwyYn2%2BK7Mq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDzm9m2YHCcvHIFQmircAwLGL7IrsJqe3qrTYh5i%2B%2FGaO4QY0s1zDhomOEtExmdgZhGfcbvbGrp5mzm7wiU2LxCPSJh%2BmEzTiqG3dAv8MWbjpbeuZ7N1cpDwvAXjsNKclg0a2Ce0rcU1VumYR0k8pfDM6oMDhYV9tuGzVK0%2ByKf%2Bd7XJOVenY8QnE9lW2NG0mlfuuNVPJllYamDcB5wUyjXPGjwcSpzdmXQN4YhlTTIfQxbDDr5iA5Np1wGrXomrLpH0YoLd0IxXpc3T030yWd2QouOPM4EoYolCipCZ16HTHG1kxO19szdyUi5bnIANGKboJElMdohJBOUqvL9cy14wljKSDF0fcIxFhDqkQHNELSrUAFq0aJsvZMt6%2B4vhcdYv%2Bvyth5nay5Z5ifG8ZMVyX3GM7gY47CsxaTnuo5UzozqrwXbk9J1XxebR8csP0%2BUsdoU7nHD%2FVnum67zh9MLGDuEfRVNYraR612ESOL8jjwIcwaS5fq9imuZPd6%2BNRU4tdR4ppNapUqZzwNgdp4ZcUH%2Fbfcm9Pc%2BsiUDmYt3zb6W22ZPD4Q8N8jKITQGfILqWAgHXp5TkHwK3FQVgKiMTdf8Lw2Ac51sMf9g7m%2Btg5bpzi00VJfrTnf1gfhjT5%2BqQAEsn1q1p2wAtMKnNwMkGOqUBOegLqknqUIumnR9cPmXE1fb6YEFiaIbZhG1e7Xr6246Kj4kmjGlj%2Bjm63DOt%2BW9gMIxEL6oXengbDaBzp8U2urJ6CwnRoUxkN9z8MtOo7HOiVVIyb93SikC8HS%2Bled1DSvh%2FJgAVA3z6182fsVBc%2BRU6CK1uYeocOpMPSoCQfKoVavMYpEnH8pBzvTqCV51K1AqEJLCL0CoTamM9AOgY7l7o8x9s&X-Amz-Signature=4fe75150e1473c45d9283722e24b1dec26cb2c4992367f2c7ed0dd920d898dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

