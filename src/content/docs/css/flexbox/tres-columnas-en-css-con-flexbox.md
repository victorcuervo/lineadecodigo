---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHCZ6QI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BhX2ejI4OpT4RDe%2BOhvyIAm7esk66jmIqkHXsOA03PgIhAO%2FLkcD%2FRX2uZR7eQAMDmuhaLKrzYIxVlebkFdMpErdgKv8DCHUQABoMNjM3NDIzMTgzODA1IgyIAZ7VzoVMlOEK2mcq3AOJSRlqW9H41HhzhfBB%2Ff%2BJnbO22HL8VyXXqMwkOChaf1LrYkUSZTJWu5U6SWZ7gMq8aiuASUCC7C41%2B7Y0WbX8%2BQXn0vpTeTWvUJlFNlScC94dumZPjDayuzBIncJSuO8aqupvbzjFUIkxQX4qVxnqLSQ3MurFvRZMgQ8t9Mw%2Fv3qAAF%2F%2FMrRgOcicW3OyEHd7PDKYNbrV7kK%2F%2FRoBumQ0jPGg5qPTCYfmbQg1A7kHY2GnzfCsphagSmdSbx2J2UCg7L5p4al2YXqPdpONeKb0hrsQvcmt37S6IC35X03wLMxRKQXKRQY81wotP9lFev9IfJe3WRPI9KyykYmAXBO%2BMe4%2BNUEeZjB%2FeqwkiAUTLFJyJTikaT2WAGa54CnLpr%2FNXwtEFWTWA%2Bn9yvYC2TXJj7jrJu6iAsDGSIrOzQw9EOgLTRCaOt9jQ%2BxYoL0M62GRM3edtkX2yDPX6d3ZNkKUByYA9A%2BUPE%2FfD8rh7aon%2FZ5PeDaqnLvaiHnzAopWGguT1m6ZdynkTqcM2XeJwSHmTufosrDdNeEAEiuyreb%2BSnuddqw2560BuEBshpsi6jpEdkgOPqZgsGz%2FOBROlwq%2FegedMTKKcm6vadmAIiHcYI%2F435QGDJmj9leDNjDiptDJBjqkAdrBMr85R7aHjCxYDD67Y%2BJSVI4E%2F4DMNq9kd%2BiATX4dAx9fMlvI5tcP3ywegOdMG5Zh6kQSl3WtPWuDSdch%2FsWr9%2Fdt55fQy9wpnGPKY6v0oVfBUIOuCesp%2B2G%2FAsyXz8oVtGCr84JyyziYTGFH1oEY4lqe3rN8Kn2UemzV56Aej4ljeq%2FgeSOqAj3dL0POSnnpR6y56gyCb4gSDXZ8T3jNt7jR&X-Amz-Signature=3590e7106a2ce106bae0a7a1ebafc8a61c3db70250862bd9a3bbdcd88d24f89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHCZ6QI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BhX2ejI4OpT4RDe%2BOhvyIAm7esk66jmIqkHXsOA03PgIhAO%2FLkcD%2FRX2uZR7eQAMDmuhaLKrzYIxVlebkFdMpErdgKv8DCHUQABoMNjM3NDIzMTgzODA1IgyIAZ7VzoVMlOEK2mcq3AOJSRlqW9H41HhzhfBB%2Ff%2BJnbO22HL8VyXXqMwkOChaf1LrYkUSZTJWu5U6SWZ7gMq8aiuASUCC7C41%2B7Y0WbX8%2BQXn0vpTeTWvUJlFNlScC94dumZPjDayuzBIncJSuO8aqupvbzjFUIkxQX4qVxnqLSQ3MurFvRZMgQ8t9Mw%2Fv3qAAF%2F%2FMrRgOcicW3OyEHd7PDKYNbrV7kK%2F%2FRoBumQ0jPGg5qPTCYfmbQg1A7kHY2GnzfCsphagSmdSbx2J2UCg7L5p4al2YXqPdpONeKb0hrsQvcmt37S6IC35X03wLMxRKQXKRQY81wotP9lFev9IfJe3WRPI9KyykYmAXBO%2BMe4%2BNUEeZjB%2FeqwkiAUTLFJyJTikaT2WAGa54CnLpr%2FNXwtEFWTWA%2Bn9yvYC2TXJj7jrJu6iAsDGSIrOzQw9EOgLTRCaOt9jQ%2BxYoL0M62GRM3edtkX2yDPX6d3ZNkKUByYA9A%2BUPE%2FfD8rh7aon%2FZ5PeDaqnLvaiHnzAopWGguT1m6ZdynkTqcM2XeJwSHmTufosrDdNeEAEiuyreb%2BSnuddqw2560BuEBshpsi6jpEdkgOPqZgsGz%2FOBROlwq%2FegedMTKKcm6vadmAIiHcYI%2F435QGDJmj9leDNjDiptDJBjqkAdrBMr85R7aHjCxYDD67Y%2BJSVI4E%2F4DMNq9kd%2BiATX4dAx9fMlvI5tcP3ywegOdMG5Zh6kQSl3WtPWuDSdch%2FsWr9%2Fdt55fQy9wpnGPKY6v0oVfBUIOuCesp%2B2G%2FAsyXz8oVtGCr84JyyziYTGFH1oEY4lqe3rN8Kn2UemzV56Aej4ljeq%2FgeSOqAj3dL0POSnnpR6y56gyCb4gSDXZ8T3jNt7jR&X-Amz-Signature=292bb6162b320a083f81710c31aebc1cd2d8cb48363031e646d108a1823c7e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

