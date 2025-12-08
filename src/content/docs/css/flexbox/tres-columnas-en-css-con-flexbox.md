---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLQNALG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPjdd4IGi6oveB3vXIowQy8oGunIqe5%2Fq0C%2Fj%2B%2Bos0EAIhALlFtD1%2FAHEGLRIhp8ZGypXhM6AmdyOD%2BX4b2BZKowMXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAatJaYWdbBxAW0t0q3AMP8KRybC0L9aD2elRnpuM78%2Fkxwp4Mnw4vvEHtcst6Q0QcIuIya84ilpqVxMvk1%2BkqxzG%2BA9EggsIYHjAqC3U%2BxiQxC6vo3cau%2FrfaDKdknfMzB0KcHJwLqSxEfW09uJuLr77827B0e51NHg206N%2FrDN0%2BKXFJIzAnecbmhMvARi4nFVfuPHkEhQ4J4Efofuh77nlcLir0ayup3HFKuz0%2BdvFrAnGNAAyuJW4acrfp4MGl%2Fk490j2GAPYxzwR0X471ckwXsixURtWAI8JREPHUNc8Eoxexxc%2BUXaGuVxvWlhJyKp5Fxx5Vcvhq5mCtyGoQA6%2B%2FpWaD4CckMav4MdLKwSNNF2%2FLx%2FuzjU1zRs5kfg412T%2FKHX5mT76FkT%2Fam0H%2FG70%2Biq5irvrB7%2BOY4g3RO983pveYkr1d8B90XTI4AxIeYEZQioWsueo3VqhoBenUV%2F8Vs0RCVZOUUiw6YAm%2FsDqIOv7%2FBEqV%2FFf7lq5vFvHCvhw%2Bf6S%2BhnDybISc3UBrl0t1ZWaZoQHcfbeqETtm3PcKY71D5C5GkUDMf8dx9aAdeHvlGKoBi74PNhoCpfmMU4o7zOl4HJidCwCv6iDSvoaXF76dR%2FTqdnKX4CNJeUV9viJ0gwjnhhXsxDDl0djJBjqkAZ25eZ3DVaFVgVDbd53mm02X%2FKTZjlnbcx1W3TEy6%2BxoeEJ5l7%2BAGTkEZP5%2FMpsOCP%2BsJIV%2FGmO0ScKrl6gybdZq9XIrYmB79%2F3tM1BIjPinqr%2FD2CU%2BK9xMBzggfYIWfsH7zpQ9wOZXUOBN87%2FuvzC2Nb5RDEWyfyeOApwN5NrEwkszrj%2BRoWIviRszTNRkMM4y7t%2FGdLiDV5gFtoAamy7bijNm&X-Amz-Signature=586bf5d8f3d77536a3cf7f696fc97ece7f096dc74bb41051f4a3ea51a9dd51c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLQNALG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPjdd4IGi6oveB3vXIowQy8oGunIqe5%2Fq0C%2Fj%2B%2Bos0EAIhALlFtD1%2FAHEGLRIhp8ZGypXhM6AmdyOD%2BX4b2BZKowMXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAatJaYWdbBxAW0t0q3AMP8KRybC0L9aD2elRnpuM78%2Fkxwp4Mnw4vvEHtcst6Q0QcIuIya84ilpqVxMvk1%2BkqxzG%2BA9EggsIYHjAqC3U%2BxiQxC6vo3cau%2FrfaDKdknfMzB0KcHJwLqSxEfW09uJuLr77827B0e51NHg206N%2FrDN0%2BKXFJIzAnecbmhMvARi4nFVfuPHkEhQ4J4Efofuh77nlcLir0ayup3HFKuz0%2BdvFrAnGNAAyuJW4acrfp4MGl%2Fk490j2GAPYxzwR0X471ckwXsixURtWAI8JREPHUNc8Eoxexxc%2BUXaGuVxvWlhJyKp5Fxx5Vcvhq5mCtyGoQA6%2B%2FpWaD4CckMav4MdLKwSNNF2%2FLx%2FuzjU1zRs5kfg412T%2FKHX5mT76FkT%2Fam0H%2FG70%2Biq5irvrB7%2BOY4g3RO983pveYkr1d8B90XTI4AxIeYEZQioWsueo3VqhoBenUV%2F8Vs0RCVZOUUiw6YAm%2FsDqIOv7%2FBEqV%2FFf7lq5vFvHCvhw%2Bf6S%2BhnDybISc3UBrl0t1ZWaZoQHcfbeqETtm3PcKY71D5C5GkUDMf8dx9aAdeHvlGKoBi74PNhoCpfmMU4o7zOl4HJidCwCv6iDSvoaXF76dR%2FTqdnKX4CNJeUV9viJ0gwjnhhXsxDDl0djJBjqkAZ25eZ3DVaFVgVDbd53mm02X%2FKTZjlnbcx1W3TEy6%2BxoeEJ5l7%2BAGTkEZP5%2FMpsOCP%2BsJIV%2FGmO0ScKrl6gybdZq9XIrYmB79%2F3tM1BIjPinqr%2FD2CU%2BK9xMBzggfYIWfsH7zpQ9wOZXUOBN87%2FuvzC2Nb5RDEWyfyeOApwN5NrEwkszrj%2BRoWIviRszTNRkMM4y7t%2FGdLiDV5gFtoAamy7bijNm&X-Amz-Signature=c12520a35fc2db2bbbaab5d8019f3892f17ef53f7e1359be9f0f6be7acd1506d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

