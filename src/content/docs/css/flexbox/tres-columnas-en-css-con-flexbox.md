---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2KHACL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTy1WHd1s6rjNHJ21RuTk4lTrs1hoXc%2F%2FmReGrUvMtgIhAIGAxyW19dMOaW5JAebx95yhX6gOSDvSCAC4Z87h12CTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyD587NDF2GxOYDG3Iq3AMsOoa1wBxM9ICVgwXboNYPCg7vjJO9z6E8D5gNhrpEcOK4HU%2Byov%2BEFLhLow745tygR3zkUH1o1AvBHOyAA5MeM%2FNoIRDoCoqJ97lHk0U9G%2FRcaS9RvYXQo71a2vqKXB9MnE2cilyTINzMINBplSVzGdCivB6Y%2F3FoEZb7EwmAt%2FKUxO970wZZE2%2BXYO26YD3n6C8IW6%2BISiDdh7H95HqKTZyQvMV1SS%2BigArpcDgX7zLze1Pod2EQUar0tZbW6QUMnVpLHRhFX%2BwAd5ARToz7QpxRzG%2FDwgL3gc1oJhefH0Xar6Xw5KYjiqpILPhdc%2F4DbImzV3ptIEqEHXimoyWMQNwNB17LMwfh4I2ZpHagh4x4kKfH%2FvKOiSnTg1ebOXdfgwg%2F4IrvqEe6qMRojvmO8PzKPArU1xvKfcSQNNmrTz%2FfmbUJVZXPemeVJvqNGUIcGDzKJmWpZtXROy36zyz9FHIw9bd0tiGqHC%2FRvp%2FM95a3RK37ZeYSnntThl4R%2FC%2B7zSKW9mgJkjNjvo5Cg%2Bs%2BuoYL1jcnTRDikG9nqIBzgw%2BToCoDhHBx%2FQ6PFcaJoxNEjC8Tqx32b3IFU70Rl6FI%2F1rAFCbgMy2hSVUx1Y7%2Ba4WabdTlCkIm3BH8FTDQjMjJBjqkAeG68Wb%2Bm%2BNIw3GlUIfvhFr2C1v7sMUwqfvV6gS2bCcsRfpnOU5YZOVALCBCszdeEfD8OqkYkNUikL1GfnqZ%2FSpadA9PNn3FiIDi%2BIESSGla7y3DN%2BBpgA1z7jCtBcBe%2Bl4CwNMhNZoBGxMYnEOcKu2Tz9%2FaKnYojBoJjPdJYFLZt3LSsAI9iJDKAgrsstXRx02NKR%2BoM2Qqyb5ASccW7Mh%2BaBY4&X-Amz-Signature=17f40683aa83e51e5230f9b555f450a1a13eb56f72e01409bd97612e7cd93595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2KHACL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTy1WHd1s6rjNHJ21RuTk4lTrs1hoXc%2F%2FmReGrUvMtgIhAIGAxyW19dMOaW5JAebx95yhX6gOSDvSCAC4Z87h12CTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyD587NDF2GxOYDG3Iq3AMsOoa1wBxM9ICVgwXboNYPCg7vjJO9z6E8D5gNhrpEcOK4HU%2Byov%2BEFLhLow745tygR3zkUH1o1AvBHOyAA5MeM%2FNoIRDoCoqJ97lHk0U9G%2FRcaS9RvYXQo71a2vqKXB9MnE2cilyTINzMINBplSVzGdCivB6Y%2F3FoEZb7EwmAt%2FKUxO970wZZE2%2BXYO26YD3n6C8IW6%2BISiDdh7H95HqKTZyQvMV1SS%2BigArpcDgX7zLze1Pod2EQUar0tZbW6QUMnVpLHRhFX%2BwAd5ARToz7QpxRzG%2FDwgL3gc1oJhefH0Xar6Xw5KYjiqpILPhdc%2F4DbImzV3ptIEqEHXimoyWMQNwNB17LMwfh4I2ZpHagh4x4kKfH%2FvKOiSnTg1ebOXdfgwg%2F4IrvqEe6qMRojvmO8PzKPArU1xvKfcSQNNmrTz%2FfmbUJVZXPemeVJvqNGUIcGDzKJmWpZtXROy36zyz9FHIw9bd0tiGqHC%2FRvp%2FM95a3RK37ZeYSnntThl4R%2FC%2B7zSKW9mgJkjNjvo5Cg%2Bs%2BuoYL1jcnTRDikG9nqIBzgw%2BToCoDhHBx%2FQ6PFcaJoxNEjC8Tqx32b3IFU70Rl6FI%2F1rAFCbgMy2hSVUx1Y7%2Ba4WabdTlCkIm3BH8FTDQjMjJBjqkAeG68Wb%2Bm%2BNIw3GlUIfvhFr2C1v7sMUwqfvV6gS2bCcsRfpnOU5YZOVALCBCszdeEfD8OqkYkNUikL1GfnqZ%2FSpadA9PNn3FiIDi%2BIESSGla7y3DN%2BBpgA1z7jCtBcBe%2Bl4CwNMhNZoBGxMYnEOcKu2Tz9%2FaKnYojBoJjPdJYFLZt3LSsAI9iJDKAgrsstXRx02NKR%2BoM2Qqyb5ASccW7Mh%2BaBY4&X-Amz-Signature=67cf416bc0e1695aaefb418e0acd940ba6776d7e4b87fdeb7d57344fee653374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

