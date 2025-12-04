---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMCPE3F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2FhnGSY0bmKculSPVx38Bs10rlgfzEQJK1Ll4nof97gIhANH6oTFkZkdI3htKh2I6gaUlbb2RJX%2BTKYhMhInqp832Kv8DCEkQABoMNjM3NDIzMTgzODA1Igzb9OTj2nMrxkRq2Ycq3AP1Xzf9%2BrYyWDVPjJ0M7q1sSzRULEu5tsFco4LZksOQKcCryNc67YPUfCyim3Cm1mAZX00O7PqCiO4ZUQggLrjKCAbGjp6ASuH5ssQdpqa7aw9wCQmArqlOGM8QQ0qrWrWMLXWNpCCazKCvfQ%2B4k0GvrrALJElnwupiyLafa%2Byx%2B0zGrx9jgA4wXIuI7HfpjOO%2Fw%2BX9v9OKwvZ6EuXWbRopU6kZhjPO1FJ%2BHFpOL9m1IfwypB1%2BKNvS%2B4ffX1TU4kVwnrDcIwlf4KoHTvcBg%2F%2BHfju9M7H4Ow9AFPaIDSPfy0cKvi1bUU7MgcFsU6RVRnrYdzdWgeuiIAccLGqNEdaRyOUPRImqLuA5ri8DuNaKonRpHqxsHvUKtSKFVtS8F85cMtkqJ6GgSyeoftxU2NRPkzNV%2FUt6WnILBCuDLS%2FN5D2jT8XUyXOF42erglVqqhjBJokjJXdB8MNdT5EI8Ycfw1tNyOegNOU7kDkKrJOwaLUIljV%2BADlRxYuSOF1QtBTqaOgkW%2BKmzoi11AQN9GvGQ7ZOQ0Eq73PKp6sM4Cw4%2BR9d%2Btupv2qzUxXmcPG144UVXLXFgCGt56Qwxz%2BO2Rdlz%2FzYtJHXoovH96rbzcsib32jxmJlVGwvXqhVETCa3MbJBjqkAbHJS74XES%2Fh%2B18EGekLqUrdaYLyIsBShMOIz4yFVb2iBP%2FXO5o%2FJiX16BQROZvklQjBw53xMv1l0OWMfi%2BYKDkeZcYmL2zGr5jR4AJBOjgm10NlP808BT81cj7VjWiELcftvFYDizu4l%2Bn0fVATHVj9jY2c0eleL1tQfAkoeeciFm1I9RH2pvezAejWCsJ4ZMvZ4lUQH6oZ%2B7ckrOZfhtDSG%2B6x&X-Amz-Signature=6b7c8b4214ee89235e0b82c8bbbfbfa94c1b18e04ef379c4031fc049de451c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMCPE3F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2FhnGSY0bmKculSPVx38Bs10rlgfzEQJK1Ll4nof97gIhANH6oTFkZkdI3htKh2I6gaUlbb2RJX%2BTKYhMhInqp832Kv8DCEkQABoMNjM3NDIzMTgzODA1Igzb9OTj2nMrxkRq2Ycq3AP1Xzf9%2BrYyWDVPjJ0M7q1sSzRULEu5tsFco4LZksOQKcCryNc67YPUfCyim3Cm1mAZX00O7PqCiO4ZUQggLrjKCAbGjp6ASuH5ssQdpqa7aw9wCQmArqlOGM8QQ0qrWrWMLXWNpCCazKCvfQ%2B4k0GvrrALJElnwupiyLafa%2Byx%2B0zGrx9jgA4wXIuI7HfpjOO%2Fw%2BX9v9OKwvZ6EuXWbRopU6kZhjPO1FJ%2BHFpOL9m1IfwypB1%2BKNvS%2B4ffX1TU4kVwnrDcIwlf4KoHTvcBg%2F%2BHfju9M7H4Ow9AFPaIDSPfy0cKvi1bUU7MgcFsU6RVRnrYdzdWgeuiIAccLGqNEdaRyOUPRImqLuA5ri8DuNaKonRpHqxsHvUKtSKFVtS8F85cMtkqJ6GgSyeoftxU2NRPkzNV%2FUt6WnILBCuDLS%2FN5D2jT8XUyXOF42erglVqqhjBJokjJXdB8MNdT5EI8Ycfw1tNyOegNOU7kDkKrJOwaLUIljV%2BADlRxYuSOF1QtBTqaOgkW%2BKmzoi11AQN9GvGQ7ZOQ0Eq73PKp6sM4Cw4%2BR9d%2Btupv2qzUxXmcPG144UVXLXFgCGt56Qwxz%2BO2Rdlz%2FzYtJHXoovH96rbzcsib32jxmJlVGwvXqhVETCa3MbJBjqkAbHJS74XES%2Fh%2B18EGekLqUrdaYLyIsBShMOIz4yFVb2iBP%2FXO5o%2FJiX16BQROZvklQjBw53xMv1l0OWMfi%2BYKDkeZcYmL2zGr5jR4AJBOjgm10NlP808BT81cj7VjWiELcftvFYDizu4l%2Bn0fVATHVj9jY2c0eleL1tQfAkoeeciFm1I9RH2pvezAejWCsJ4ZMvZ4lUQH6oZ%2B7ckrOZfhtDSG%2B6x&X-Amz-Signature=699df92ed8995a95a246978d6fa02612a74cbd96d1edec1d109900d85ce5251e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

