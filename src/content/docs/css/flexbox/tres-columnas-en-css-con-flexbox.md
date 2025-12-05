---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SFWOD5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFixa99R4RuV7NQAgqnNgQKBP1lFIuQaQ6a1G0kIifyYAiAApvK0rll3E%2BmfsCtEuU3MGZWiBoYiHsLwU160nM5FVCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMA3s2lOWIVlC5Mm%2FHKtwDjxXvFGoiIumqzf4Q2obngKTik2YfhtDUohCLLjKgpOJZTihzqbpvtjkVMokokA9S%2BPYjdMf1lpRMM5V9y2eus71V1CHk6xAPffRErrbG%2BMpno5JYByLYXNUNdcnRojmI8KQPRagdZU%2B%2BKuzMS%2BKnaMcXAJsfz08Eg0W0SB1o%2F4hRXyMv6D2AtFKbgMxIRnOBu0bzHIcZGiZTK15KszfJQA7KhyXajdwSn%2B4bym5sqzH84dcZSrOQyY%2FYIVBwr7jKKAy48oSVgIgZ0Jbw42vFkXN3OXzMjW49Dr%2BHa8XHD72BdPm%2BEmPfx3I0DU6E830T6pp1I3pbSCtPEsH4FRuIa9P3schGhS7Ayyc4rwAogIyHiDzd1JBsTrqMlZG8LPAg4xHYj8GYMfO7bwGHOwCiBGoiXzmGof3SU7AlyDKyUV%2B2Pkcip8F%2FRr%2FdrDIKPTCfOVzqtlVnPRWp54tRBMMW4p22s0DZHHd4GtHwnVbsOtYFCTg9oGfAV%2FbNJe%2BHzFmk3j8W%2FReRd8wmEbF7uRQbDql6YWQTshZhsuQ78iwzgBWGhGtrUa%2FJ6EDkdqyyceRoJYBOIveufCgmZIABlNh4f0fEVjnanKoZ98vXD7ORwZZCGf%2BtpqYEXUPTfvwww4zIyQY6pgG48tLtUdC7R9MwlsmkPn72oQxiMWV8r1i3%2B5eftVO7MPKe9ql8VslRWuaTR4OMlV0LTWyJHtd7fl96AqsJYJU9%2FxJchcJmnnY5NeNiVOhizWSepRmZSVfqX9MI%2FnKNTbWUhxU4Immue5JT85GmTqZhUMleJhCeFKxJA0aCYaz%2FsCNajrZMH1Jp6fIetqr0vCzUQZ%2BnVbw9u%2BH8NpFZn%2FCgPaItEMjS&X-Amz-Signature=4299d638b21d962eca14738cf07c93dcac63a4a4f34104ff809daf25b2793492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SFWOD5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFixa99R4RuV7NQAgqnNgQKBP1lFIuQaQ6a1G0kIifyYAiAApvK0rll3E%2BmfsCtEuU3MGZWiBoYiHsLwU160nM5FVCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMA3s2lOWIVlC5Mm%2FHKtwDjxXvFGoiIumqzf4Q2obngKTik2YfhtDUohCLLjKgpOJZTihzqbpvtjkVMokokA9S%2BPYjdMf1lpRMM5V9y2eus71V1CHk6xAPffRErrbG%2BMpno5JYByLYXNUNdcnRojmI8KQPRagdZU%2B%2BKuzMS%2BKnaMcXAJsfz08Eg0W0SB1o%2F4hRXyMv6D2AtFKbgMxIRnOBu0bzHIcZGiZTK15KszfJQA7KhyXajdwSn%2B4bym5sqzH84dcZSrOQyY%2FYIVBwr7jKKAy48oSVgIgZ0Jbw42vFkXN3OXzMjW49Dr%2BHa8XHD72BdPm%2BEmPfx3I0DU6E830T6pp1I3pbSCtPEsH4FRuIa9P3schGhS7Ayyc4rwAogIyHiDzd1JBsTrqMlZG8LPAg4xHYj8GYMfO7bwGHOwCiBGoiXzmGof3SU7AlyDKyUV%2B2Pkcip8F%2FRr%2FdrDIKPTCfOVzqtlVnPRWp54tRBMMW4p22s0DZHHd4GtHwnVbsOtYFCTg9oGfAV%2FbNJe%2BHzFmk3j8W%2FReRd8wmEbF7uRQbDql6YWQTshZhsuQ78iwzgBWGhGtrUa%2FJ6EDkdqyyceRoJYBOIveufCgmZIABlNh4f0fEVjnanKoZ98vXD7ORwZZCGf%2BtpqYEXUPTfvwww4zIyQY6pgG48tLtUdC7R9MwlsmkPn72oQxiMWV8r1i3%2B5eftVO7MPKe9ql8VslRWuaTR4OMlV0LTWyJHtd7fl96AqsJYJU9%2FxJchcJmnnY5NeNiVOhizWSepRmZSVfqX9MI%2FnKNTbWUhxU4Immue5JT85GmTqZhUMleJhCeFKxJA0aCYaz%2FsCNajrZMH1Jp6fIetqr0vCzUQZ%2BnVbw9u%2BH8NpFZn%2FCgPaItEMjS&X-Amz-Signature=a5e42fc0efd9ae546ea72964593e2783364a4f2a17f659f1582295f30b474f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

