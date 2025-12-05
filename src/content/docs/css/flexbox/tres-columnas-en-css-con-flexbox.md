---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRFA7EC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYfNVpvI2jTVyq9VjLy1MSYZEHRDxkZtB6GF1mm%2FVKqAiBlu6Vrx7GH%2FyQ5KO678ybU6LycfOY0NmfNufZnUWyV2Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2rUIUm%2BQMu1fJCvFKtwDmjx5G3c7ZkSR9gC8gMT5GcHxXKciG%2FaSGuXLRtdKa5eR%2BzVXgpBS1aVj7SZ3vmibW5kC0nlABbhafy0MeCHKtt%2BgI1nE1Ycuj4KHKYG0B4IkdPmIvwjA4pmHkDFFW2HEz1bk6FHLi2CorIuJPlGLvdOsD2wJjWkSOpcaCKvUOnowtha7jp%2F7HPGDb%2FcezWfUb62VWAdwYJFmsQCnTpUMxEbeY38kqaJWHmvYisjK%2B7LITJLf9Jgs5sRtuXIGcx1h%2FCGimkvROu%2BpPCWTdwKm5gb1SdhyYfD8asn5J8iy89eTbIE0wIgfb9iP9EilSAUEIWRTDtIQEhYbHZPa83T2fI4egC4Ni0lCTKMbsAhO5QprUxsrADKTvKhpVVSB0hS6ej4BzGERrBNaE1Dmnc2mQTmRKqvkssOGIU%2Bvq7gNYehET1esXko4oeBJaG04fWO7wX5jseKQuz9o1vUO2mXl76%2FDY8e6kKswwsncZgkV1%2FHM2UXAmy%2FqWQHni0Vv7ahQ1fI5IY9lpR23YWsnREZiT6p6Jx46BFAQTp8LOuKrjzlUnLHn7B5nqKHy7p1ShBZWa3CSMBmF3g8C73dVj3je0kAcyhV31qU0w6krsDlHcD2%2Br8vcsytQrFLZfhgwr9DKyQY6pgHdv%2BDWUv2ul1AV5%2BTD8fkYdxMwbCW4t7FEXUFP5U23JaSoTqJAECySq7Sql8pC%2B88qERoBfMlQ5886JUm8K5%2F008aUgSo9zz%2BBgCTP0OKRCwrqxymx3Z8qIUEXf8JA3dfp8zFK61%2BW8fCe8VJ2p4H0LPFkHGhA%2F%2FAtTs87iC1xXpcqBi1Pvye78%2FY47kTS43ipsMMhe6qTQRJ22bft%2BGsojYDX0thy&X-Amz-Signature=46ee4550d72f4ff79bae399d890f7d7c9c0864b8bc401c4a8397505a8f88e216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRFA7EC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYfNVpvI2jTVyq9VjLy1MSYZEHRDxkZtB6GF1mm%2FVKqAiBlu6Vrx7GH%2FyQ5KO678ybU6LycfOY0NmfNufZnUWyV2Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2rUIUm%2BQMu1fJCvFKtwDmjx5G3c7ZkSR9gC8gMT5GcHxXKciG%2FaSGuXLRtdKa5eR%2BzVXgpBS1aVj7SZ3vmibW5kC0nlABbhafy0MeCHKtt%2BgI1nE1Ycuj4KHKYG0B4IkdPmIvwjA4pmHkDFFW2HEz1bk6FHLi2CorIuJPlGLvdOsD2wJjWkSOpcaCKvUOnowtha7jp%2F7HPGDb%2FcezWfUb62VWAdwYJFmsQCnTpUMxEbeY38kqaJWHmvYisjK%2B7LITJLf9Jgs5sRtuXIGcx1h%2FCGimkvROu%2BpPCWTdwKm5gb1SdhyYfD8asn5J8iy89eTbIE0wIgfb9iP9EilSAUEIWRTDtIQEhYbHZPa83T2fI4egC4Ni0lCTKMbsAhO5QprUxsrADKTvKhpVVSB0hS6ej4BzGERrBNaE1Dmnc2mQTmRKqvkssOGIU%2Bvq7gNYehET1esXko4oeBJaG04fWO7wX5jseKQuz9o1vUO2mXl76%2FDY8e6kKswwsncZgkV1%2FHM2UXAmy%2FqWQHni0Vv7ahQ1fI5IY9lpR23YWsnREZiT6p6Jx46BFAQTp8LOuKrjzlUnLHn7B5nqKHy7p1ShBZWa3CSMBmF3g8C73dVj3je0kAcyhV31qU0w6krsDlHcD2%2Br8vcsytQrFLZfhgwr9DKyQY6pgHdv%2BDWUv2ul1AV5%2BTD8fkYdxMwbCW4t7FEXUFP5U23JaSoTqJAECySq7Sql8pC%2B88qERoBfMlQ5886JUm8K5%2F008aUgSo9zz%2BBgCTP0OKRCwrqxymx3Z8qIUEXf8JA3dfp8zFK61%2BW8fCe8VJ2p4H0LPFkHGhA%2F%2FAtTs87iC1xXpcqBi1Pvye78%2FY47kTS43ipsMMhe6qTQRJ22bft%2BGsojYDX0thy&X-Amz-Signature=b188e6bc0a125c277bd548aa52f0878eb430c515765b191d49ecdda8ac41a102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

