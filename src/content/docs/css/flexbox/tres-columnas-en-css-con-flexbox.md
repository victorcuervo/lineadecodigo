---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IEOPI5O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaCtV%2B7T4%2BXxrAij97qawdWHKNhFIiaMYiXk9AjFMF6AIhAIzma3AqmeVvQUsPjrwTPY1FJJlCqtmmHymZ1E2tD5JBKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOo20Sq4wuUSoK5k0q3APGB9WHbgpWjWfjahkEux1LCChSiNpqv9ijqZTkbRoVfPjw51C9I4IAPFA%2BmmEfaf2buwMNoNmrLPuE1CnyaMMpYmHid%2BcisuFooK4kwUQEknZOHqCuHFMk6q7Z3nGk9CNpRkHf4t3%2Foh6nKduojwHRi1VpvdYoaTkiqiCpee%2FOEK%2FL%2BX%2BumkJ58q%2Bu7IfZjUxSz3VtHliEMVo%2Fbj%2FaIkv1YAiESPEytc7p0FOJ5K74zZqf%2FBc0XJtVfIjYBzpPQqtHm7%2FI33KFDSXtITb84EIKFcmexfKWS9rSA7WW4RL30fzNqlLTq%2BbYEm901nacu9qLAd0wLLfsZDpub5lzDODQjwgLhOCuFETWLbscb43Nlh7Ld2QGoLcLxsWpgz%2FKPUCU7yWtXKY0kERFx1X%2BV5%2Fjky1jZCD2NCKh1ivArqFBYVV4HzuPfrt8MkSTt53POHm21A9hIftydLFgDehpx1hfoKF2d0aBsSZgW5MflN3NzG7CzxmbkJGMqGe0dfrLUG%2BFyh7KAka7EVtNgbq1dOzS%2Bc9fpXxmfZM%2FvY%2BEnt6H4KF5Ueti8Z6ppxLMNKEHfU64JI6a1AAq28M5Wek1uR9JKMKCKLgG8%2Bgv1q3iCIiU9UAT6IkuaXXHL9NhXzCc7tjJBjqkAUoWFR4b5x%2FDSyzHK8L11xP55mE1J2f7YTlzxGC1fQsoOiqWx7IKtTupay%2BCeA9V%2FD0fVDbLl9BKsDnYDJ6gzxYcX2eLKZnd%2F3FDyJtUK3MaaTDtFB4f7dhAayXvjqxo3rjXqJ2DE0jqduf97MPLUXBvfxdPu8VjSLomFLqqVbH5RxVt4nDvLiL1UiSUAs3m1nF9aCMHPtRaxGJd50ceCKkbBn%2BQ&X-Amz-Signature=45d5da770d411cf56043fc6e9f83f5d3e0ca4fdd3e39f5301f25352e0b5957da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IEOPI5O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaCtV%2B7T4%2BXxrAij97qawdWHKNhFIiaMYiXk9AjFMF6AIhAIzma3AqmeVvQUsPjrwTPY1FJJlCqtmmHymZ1E2tD5JBKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOo20Sq4wuUSoK5k0q3APGB9WHbgpWjWfjahkEux1LCChSiNpqv9ijqZTkbRoVfPjw51C9I4IAPFA%2BmmEfaf2buwMNoNmrLPuE1CnyaMMpYmHid%2BcisuFooK4kwUQEknZOHqCuHFMk6q7Z3nGk9CNpRkHf4t3%2Foh6nKduojwHRi1VpvdYoaTkiqiCpee%2FOEK%2FL%2BX%2BumkJ58q%2Bu7IfZjUxSz3VtHliEMVo%2Fbj%2FaIkv1YAiESPEytc7p0FOJ5K74zZqf%2FBc0XJtVfIjYBzpPQqtHm7%2FI33KFDSXtITb84EIKFcmexfKWS9rSA7WW4RL30fzNqlLTq%2BbYEm901nacu9qLAd0wLLfsZDpub5lzDODQjwgLhOCuFETWLbscb43Nlh7Ld2QGoLcLxsWpgz%2FKPUCU7yWtXKY0kERFx1X%2BV5%2Fjky1jZCD2NCKh1ivArqFBYVV4HzuPfrt8MkSTt53POHm21A9hIftydLFgDehpx1hfoKF2d0aBsSZgW5MflN3NzG7CzxmbkJGMqGe0dfrLUG%2BFyh7KAka7EVtNgbq1dOzS%2Bc9fpXxmfZM%2FvY%2BEnt6H4KF5Ueti8Z6ppxLMNKEHfU64JI6a1AAq28M5Wek1uR9JKMKCKLgG8%2Bgv1q3iCIiU9UAT6IkuaXXHL9NhXzCc7tjJBjqkAUoWFR4b5x%2FDSyzHK8L11xP55mE1J2f7YTlzxGC1fQsoOiqWx7IKtTupay%2BCeA9V%2FD0fVDbLl9BKsDnYDJ6gzxYcX2eLKZnd%2F3FDyJtUK3MaaTDtFB4f7dhAayXvjqxo3rjXqJ2DE0jqduf97MPLUXBvfxdPu8VjSLomFLqqVbH5RxVt4nDvLiL1UiSUAs3m1nF9aCMHPtRaxGJd50ceCKkbBn%2BQ&X-Amz-Signature=c74e14ff2c57d4e9bf3438765fcf227f1fef415090364b1a9f0fa20970501250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

