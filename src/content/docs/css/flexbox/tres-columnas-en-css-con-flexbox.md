---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNERNQPP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8juuXsr0xJP71Zi3DuigOGMZ3SCA0hHJcERTSQ%2Fw6BAiBT8jHKOQfBH0GvugqTpKGDzzvf3LGsTmc4G6pey9rS2Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHdLbAtwgvBU9egmoKtwDA%2B2ayQ99sTc1ANdVAZJHWBSdBBZMG1XiYSUKH7ETUl36xzw2Bwz3b9HuqcFPRdFdv3t8Nuv3yxAcjrtkKtaCqlQsoKdg9viVrf%2B5qP55Y%2FSHpw6z8K9tozqHJWjLJqnt6KsnBWy36Wjtx%2FV8ck3trInjZjXJ2fIhJO%2FJKFcA%2BuoY10xQ7jxSIR6%2BaDRDAawBOqnKTNCbauEeqonPXVqeFT5veh7vYWt34QL4mamj7Yu4JedwF9xKUU%2BDczsl1Kjjk1O%2BTKNmnRkYANtceIeiv8a64WbPyeEsGmClrLMYgbHgad4rXejglNPnr0wx%2FSapWbvGcVXxocIEVsYjmWc3h6B%2BLT6%2FffEa%2FHMUEOybOHhzd1Eq2ATwr%2FT4bJDtAXi1sGNdidKDoah91QVQ7hQlA2yKNFA%2BqJtKEl1oMX7VGI69OyBxWws72HwCmd5KKgjJlJwHt7KEgRP5s%2B6BFlau17tLdbmTffD2t%2BA4hD5t%2F6VmWXMJD3cMvm9ImRHmwUqGe%2FfLmYBpehq%2FO1lRie%2FQQz3F0eA%2B4E5mQM9SEXbYqdQ4VQMsO%2Bfb6HpUPRJZeUVVvZLCbsoIEJmHnAXC5h%2BCmBZ%2B5W5T9gwkvDEXP2%2BNOf%2BBU9zzyJBQiq1M2H4wg93GyQY6pgFMvWLuDvHxjiGigudL4qdKZzzslwfH3APam6L8PTrGTzjZWxQ%2FavvaPC%2F32ZSW%2FPqNGFDAwujI50ou9p66SMUfBB9pT2xdlL68XKfehxyaMNOf5NaCHPSj%2FrjostHug3WVIMOtNebOlJjhEQlBEJjlhvrK%2F8nSXVXKe9mdWqIrQHw85%2BmmuvGHw0dEMwIy4Ew8fkOa0SO4cJv6sWdtsdboPHJwf%2BUB&X-Amz-Signature=f607fbee1b2d05b6119fd9cf2a1c608d59b8d46c4445468ea65f1e106ef8640f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNERNQPP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8juuXsr0xJP71Zi3DuigOGMZ3SCA0hHJcERTSQ%2Fw6BAiBT8jHKOQfBH0GvugqTpKGDzzvf3LGsTmc4G6pey9rS2Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHdLbAtwgvBU9egmoKtwDA%2B2ayQ99sTc1ANdVAZJHWBSdBBZMG1XiYSUKH7ETUl36xzw2Bwz3b9HuqcFPRdFdv3t8Nuv3yxAcjrtkKtaCqlQsoKdg9viVrf%2B5qP55Y%2FSHpw6z8K9tozqHJWjLJqnt6KsnBWy36Wjtx%2FV8ck3trInjZjXJ2fIhJO%2FJKFcA%2BuoY10xQ7jxSIR6%2BaDRDAawBOqnKTNCbauEeqonPXVqeFT5veh7vYWt34QL4mamj7Yu4JedwF9xKUU%2BDczsl1Kjjk1O%2BTKNmnRkYANtceIeiv8a64WbPyeEsGmClrLMYgbHgad4rXejglNPnr0wx%2FSapWbvGcVXxocIEVsYjmWc3h6B%2BLT6%2FffEa%2FHMUEOybOHhzd1Eq2ATwr%2FT4bJDtAXi1sGNdidKDoah91QVQ7hQlA2yKNFA%2BqJtKEl1oMX7VGI69OyBxWws72HwCmd5KKgjJlJwHt7KEgRP5s%2B6BFlau17tLdbmTffD2t%2BA4hD5t%2F6VmWXMJD3cMvm9ImRHmwUqGe%2FfLmYBpehq%2FO1lRie%2FQQz3F0eA%2B4E5mQM9SEXbYqdQ4VQMsO%2Bfb6HpUPRJZeUVVvZLCbsoIEJmHnAXC5h%2BCmBZ%2B5W5T9gwkvDEXP2%2BNOf%2BBU9zzyJBQiq1M2H4wg93GyQY6pgFMvWLuDvHxjiGigudL4qdKZzzslwfH3APam6L8PTrGTzjZWxQ%2FavvaPC%2F32ZSW%2FPqNGFDAwujI50ou9p66SMUfBB9pT2xdlL68XKfehxyaMNOf5NaCHPSj%2FrjostHug3WVIMOtNebOlJjhEQlBEJjlhvrK%2F8nSXVXKe9mdWqIrQHw85%2BmmuvGHw0dEMwIy4Ew8fkOa0SO4cJv6sWdtsdboPHJwf%2BUB&X-Amz-Signature=5aab072cdc19f31f2e74e401a4d9f9d9b6f1e902ac60ce83f505bb27ba87ea23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

