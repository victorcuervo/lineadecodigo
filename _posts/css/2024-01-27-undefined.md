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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWK2BXGQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCZ4cj3vIPW2lDKyQg68KiE3EeRXwJ6QIppRxd8T%2BkX1wIhAIjjDzzxBjdzmlXJ65%2F8Zz1qRZGcOE4DP4acA5BTrkb4Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyLclmLhpYVgQjmXpYq3AMUohjE2VyHJFaPsf2h02lO0AbxQpP%2B2bxAe2I5ruVXoozDWfmYYhbLuVnaJZyHZqXdwhXNEm5fpfTsw0B5oxen3uy0HcT8U0cD5pJo7Gf2khcB5DdWmhfmTa6RtDOZY2SJitbxyH%2BdLZ4x0JWKTBpccIy8Ve3Y6tS36ZK8zsSKQ%2Fo8zmlHvDnlhFDHUKzwH6a3CYuizmtAqBbUHkU%2BNwvtCx28mFRd9rZUOHU5hR14ONpTVeEwX%2B7pWkQN5j%2BtBTHDfJJ2CzTG7s0xxgOxehpdsOflcBFX87y93whQyny6KJ6d58yb8GlG0gI9GBtpAe%2FCLZ6O7hecqp6rZ0UEqT2X2KxtGtT2LyhqjDAZ3F9du%2FIzuqX4BlcYJmoN7A4Nx4ZEMFkRiIJRmr%2B%2BM3mIq2s8BWJ%2FjuPCaDiipLayN9YdtdVC9bP9Kjgpaon9h2hQjZvqayvSHNsREargpZTSgpcmDa8TKBV0dvRfwiuNrE2AYSU553dPHNtxFNZWciLasTwQ5u4pS%2Bphqp8mTOPFqFUwR9HJBLjB%2FtRr8Zl2K6m4AP3MHlRefxrpJO%2Fuyh65fm9%2BzI9fdv2h8qjIeZc9HV61b9aLBLF34Q8OuQEHpnDw59A4PeZdju9E2x9kCzDIwcHJBjqkAUpYD3fHK%2F8xRFTRqRUWrZDfmYwKOHUvujZgiMllRjOm2j6lSGGW%2FV4Tq30H1LbuBSMjBkFpoFMS09BAKIO4M%2FAuLYWzf6Iy%2BElugX2ecefHi%2FCcsGULhLOsIAlExDXMD8c2NyuxIiPMcUfugFbYdZUM%2BeDYeUxjABK0qrdy4FM2Lajk%2FjkoHkMaMPlL4ViO6DAe5poEnDlTFD9bVfkbkba2tHvs&X-Amz-Signature=f19478ae74d77e567b558e6abd4157d56892e98f7ed79d77e0d34e9a4d81ed6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWK2BXGQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCZ4cj3vIPW2lDKyQg68KiE3EeRXwJ6QIppRxd8T%2BkX1wIhAIjjDzzxBjdzmlXJ65%2F8Zz1qRZGcOE4DP4acA5BTrkb4Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyLclmLhpYVgQjmXpYq3AMUohjE2VyHJFaPsf2h02lO0AbxQpP%2B2bxAe2I5ruVXoozDWfmYYhbLuVnaJZyHZqXdwhXNEm5fpfTsw0B5oxen3uy0HcT8U0cD5pJo7Gf2khcB5DdWmhfmTa6RtDOZY2SJitbxyH%2BdLZ4x0JWKTBpccIy8Ve3Y6tS36ZK8zsSKQ%2Fo8zmlHvDnlhFDHUKzwH6a3CYuizmtAqBbUHkU%2BNwvtCx28mFRd9rZUOHU5hR14ONpTVeEwX%2B7pWkQN5j%2BtBTHDfJJ2CzTG7s0xxgOxehpdsOflcBFX87y93whQyny6KJ6d58yb8GlG0gI9GBtpAe%2FCLZ6O7hecqp6rZ0UEqT2X2KxtGtT2LyhqjDAZ3F9du%2FIzuqX4BlcYJmoN7A4Nx4ZEMFkRiIJRmr%2B%2BM3mIq2s8BWJ%2FjuPCaDiipLayN9YdtdVC9bP9Kjgpaon9h2hQjZvqayvSHNsREargpZTSgpcmDa8TKBV0dvRfwiuNrE2AYSU553dPHNtxFNZWciLasTwQ5u4pS%2Bphqp8mTOPFqFUwR9HJBLjB%2FtRr8Zl2K6m4AP3MHlRefxrpJO%2Fuyh65fm9%2BzI9fdv2h8qjIeZc9HV61b9aLBLF34Q8OuQEHpnDw59A4PeZdju9E2x9kCzDIwcHJBjqkAUpYD3fHK%2F8xRFTRqRUWrZDfmYwKOHUvujZgiMllRjOm2j6lSGGW%2FV4Tq30H1LbuBSMjBkFpoFMS09BAKIO4M%2FAuLYWzf6Iy%2BElugX2ecefHi%2FCcsGULhLOsIAlExDXMD8c2NyuxIiPMcUfugFbYdZUM%2BeDYeUxjABK0qrdy4FM2Lajk%2FjkoHkMaMPlL4ViO6DAe5poEnDlTFD9bVfkbkba2tHvs&X-Amz-Signature=2779da7da530ff2af22e70872c56f20def9b97526929698bbb5984fcb2c0a92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

