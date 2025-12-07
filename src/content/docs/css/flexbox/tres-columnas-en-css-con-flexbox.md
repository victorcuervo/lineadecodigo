---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WP24FSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDNAv45z1eDw310TfWGlZyLYK1V%2BpEoMAZVHpiDTNpCgIhAIdZg39GkUDyjAevEfXPo4i6EU%2FHHJHY9DyXyOX4FiCHKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc5IianuO%2FUCJKnsMq3APFqOMQqwDsDFW6457xYCtZMCEx%2Fo8%2BcsqZ%2FKFDYz9WugI8j9QTPBZzh%2Bt1uwXdDd6YZrosWXzgearK8%2Ft%2FZZYix%2BeAql0BHGNiloUdQTTapSFERxOmA7oUxRrjY7DIQ2dQelxL%2F5PSuA2rpwSNy%2FngSyhxJ7eLm8NdPU2dNo8nQGR8f0syUdCZLwN8DWspn7Fg7PrswaWx%2FieSz9lMTRfZwZiXniKkLS0v29cPc98FUOs9YpwAHMo4CsDf9cnDhmoxXL9gNfsRoSj0EnuQXSjvHNdPcM5X7fTZmivm%2BDvZfTHHxiKdIVeRIBezqHgOmnfNmhOGw7g8DqspfPq9A2CkDHrwaPQB361EA2ibvNRcmq7Pgn1E7aR9fp7WhaxQdvwJ9nbPBSnaunPjwYOzId5BGZdmQJfIiFCGHSh4Alvul0KLcZcyXlZMe3PhGjmjxbJgfyNQUb5VDMtTcVKZicZB3rdZychaA8pKDoCIyg3d16AEncG2BJHWqiz%2FgmArW%2F%2B8TblAPqbKEXuKg0wtXfU98K%2BwnQz%2F1VwPJHCo4EdRWXPVcIvf4JaZeuQ99G9TCWkE3QBRt6feUcPrR1LOwhJVE6GDD0U5233wZVPlx7MFLTZwyjHa5vS3RAC3ejCCqdfJBjqkAUeFw11tU38zU3beV3HgQWX4VNtWV%2BEnhj%2BJD0SLEvqEv5wXkvzuz0P2Q9nCPjA5gPet8Ctny1dwIXO0Of6Sl3jPJLIJ6Y7Naj9C2g3M%2BuOThAQYD4nlsZ5da84iGIi7DE%2BWX6a9b9U2U8EVNFGKXaKaO8O57rb8QXYhv9XQaYMSgjfQUX04EjJAQYEcwEzPyMXq7NcNadpCY5pMZbD1ojmTX3uB&X-Amz-Signature=e66f46a036a7b2ee9c9c83b43b264a147da472c6e1f29109195296edf38b4624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WP24FSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDNAv45z1eDw310TfWGlZyLYK1V%2BpEoMAZVHpiDTNpCgIhAIdZg39GkUDyjAevEfXPo4i6EU%2FHHJHY9DyXyOX4FiCHKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc5IianuO%2FUCJKnsMq3APFqOMQqwDsDFW6457xYCtZMCEx%2Fo8%2BcsqZ%2FKFDYz9WugI8j9QTPBZzh%2Bt1uwXdDd6YZrosWXzgearK8%2Ft%2FZZYix%2BeAql0BHGNiloUdQTTapSFERxOmA7oUxRrjY7DIQ2dQelxL%2F5PSuA2rpwSNy%2FngSyhxJ7eLm8NdPU2dNo8nQGR8f0syUdCZLwN8DWspn7Fg7PrswaWx%2FieSz9lMTRfZwZiXniKkLS0v29cPc98FUOs9YpwAHMo4CsDf9cnDhmoxXL9gNfsRoSj0EnuQXSjvHNdPcM5X7fTZmivm%2BDvZfTHHxiKdIVeRIBezqHgOmnfNmhOGw7g8DqspfPq9A2CkDHrwaPQB361EA2ibvNRcmq7Pgn1E7aR9fp7WhaxQdvwJ9nbPBSnaunPjwYOzId5BGZdmQJfIiFCGHSh4Alvul0KLcZcyXlZMe3PhGjmjxbJgfyNQUb5VDMtTcVKZicZB3rdZychaA8pKDoCIyg3d16AEncG2BJHWqiz%2FgmArW%2F%2B8TblAPqbKEXuKg0wtXfU98K%2BwnQz%2F1VwPJHCo4EdRWXPVcIvf4JaZeuQ99G9TCWkE3QBRt6feUcPrR1LOwhJVE6GDD0U5233wZVPlx7MFLTZwyjHa5vS3RAC3ejCCqdfJBjqkAUeFw11tU38zU3beV3HgQWX4VNtWV%2BEnhj%2BJD0SLEvqEv5wXkvzuz0P2Q9nCPjA5gPet8Ctny1dwIXO0Of6Sl3jPJLIJ6Y7Naj9C2g3M%2BuOThAQYD4nlsZ5da84iGIi7DE%2BWX6a9b9U2U8EVNFGKXaKaO8O57rb8QXYhv9XQaYMSgjfQUX04EjJAQYEcwEzPyMXq7NcNadpCY5pMZbD1ojmTX3uB&X-Amz-Signature=e47f1705dcac3866c9ecc8b75fdab5525993a79f6b5f9adceb472b2a8acf3a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

