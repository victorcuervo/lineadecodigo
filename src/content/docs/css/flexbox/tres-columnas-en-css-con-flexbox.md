---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W3ELFI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2FBipbDd8dEQZfpHDLtf%2FyYj3sL0EVL2LIgaR8aMO4AiEA4tFc7SUPvR9Gm7lGphqOkwLEJ5jTKjt3DkfGiIIqnqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuNOfCID9MEj9lwuircA3yPktlp%2BV8%2FeRB5nqJJECA5pIdGf2deB6sDibTmcHMcOvnzAcglEBdaasMMtUeuZo7FVofrNd0h5UtlPGn1Wo8xKduK6REQCRCkNeoLLZsG9rqt6pIj8DxF7Bx1DmLhdZ5%2BWflzmluEJqqQ3YmmCrGUZviBDGs5mTuVtnlvVimINiH7o9faGFRuQ4SFInEueUr9iMOid4yDGnQgNiiIY%2FQKVN%2FwS4pmK64n%2FCqR0Kac4KhBuaM5vnq287dF6mVTFlfxNQ2Jb%2FI248OfRyvryUTZ9CBfK%2FvBfl3jX4dq7wN4wSv2CDZHW4olWJeT4vWuSzvvyCTJMTLger7WyC9VvCEBTCTh79eQeXW0avcx085rQDLFZ4oElGb6mlkzySvsvqeXy5sHMmUcogUvGi3YmjBoFSi0hbeML5DX94I9iNCzSBBTCjzW1cbBSdRBRNgBb%2FxZrFv%2F5zqf43O38b%2FIGMLkxod0b1VtDyC5BmPq1tVk2nSNwAkGAAxaUgiBNiysp7167OxBfPGqfBhVPB1qMbS7DG8hbY%2F%2Fh%2FYC27oGFYSub9dsZdfQc75I7mnfUSkewztm2cNsGYrTsB%2Fz64Cj4PT1yrJ6ec1zzKXGfA3WiJoR61nJ4sigf7nEgQgdMNPl3skGOqUBRgTdRfNUBzjqCpSupljIrb1ljGxe4lJ2H%2BldubmIuSBX3WnbMb0lGYNmSYEg7cb20DQPZjXCWIaZXb%2FtJO5j4Nqru07v1SrLvqoFpPzZvAEm%2B7ZqwecXcaByVOgNnsimXY4%2BPjcQmLoakE%2F87Nx2fgZHN%2FDoGJEsSxiyMPguVklCiSPVvkozRaFAdqbqP7Xn4nOk9Pjg83ZnAbcuHCZAPQWZ5%2FZZ&X-Amz-Signature=5db3d657164ff747225c07735d6a2a543f9566ba98a8a46f3eb417eed0dc9e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W3ELFI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2FBipbDd8dEQZfpHDLtf%2FyYj3sL0EVL2LIgaR8aMO4AiEA4tFc7SUPvR9Gm7lGphqOkwLEJ5jTKjt3DkfGiIIqnqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuNOfCID9MEj9lwuircA3yPktlp%2BV8%2FeRB5nqJJECA5pIdGf2deB6sDibTmcHMcOvnzAcglEBdaasMMtUeuZo7FVofrNd0h5UtlPGn1Wo8xKduK6REQCRCkNeoLLZsG9rqt6pIj8DxF7Bx1DmLhdZ5%2BWflzmluEJqqQ3YmmCrGUZviBDGs5mTuVtnlvVimINiH7o9faGFRuQ4SFInEueUr9iMOid4yDGnQgNiiIY%2FQKVN%2FwS4pmK64n%2FCqR0Kac4KhBuaM5vnq287dF6mVTFlfxNQ2Jb%2FI248OfRyvryUTZ9CBfK%2FvBfl3jX4dq7wN4wSv2CDZHW4olWJeT4vWuSzvvyCTJMTLger7WyC9VvCEBTCTh79eQeXW0avcx085rQDLFZ4oElGb6mlkzySvsvqeXy5sHMmUcogUvGi3YmjBoFSi0hbeML5DX94I9iNCzSBBTCjzW1cbBSdRBRNgBb%2FxZrFv%2F5zqf43O38b%2FIGMLkxod0b1VtDyC5BmPq1tVk2nSNwAkGAAxaUgiBNiysp7167OxBfPGqfBhVPB1qMbS7DG8hbY%2F%2Fh%2FYC27oGFYSub9dsZdfQc75I7mnfUSkewztm2cNsGYrTsB%2Fz64Cj4PT1yrJ6ec1zzKXGfA3WiJoR61nJ4sigf7nEgQgdMNPl3skGOqUBRgTdRfNUBzjqCpSupljIrb1ljGxe4lJ2H%2BldubmIuSBX3WnbMb0lGYNmSYEg7cb20DQPZjXCWIaZXb%2FtJO5j4Nqru07v1SrLvqoFpPzZvAEm%2B7ZqwecXcaByVOgNnsimXY4%2BPjcQmLoakE%2F87Nx2fgZHN%2FDoGJEsSxiyMPguVklCiSPVvkozRaFAdqbqP7Xn4nOk9Pjg83ZnAbcuHCZAPQWZ5%2FZZ&X-Amz-Signature=89debef357f8c33f24159a5c6f22dee28c9646fa91866b75403adf2e5851e3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

