---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22RVOFJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB%2Bf1vR4S225vaAgwau9brwGG%2B9ewUdaBiChY24z%2FprIAiARorbZkuehNE8NhB%2BCyqLdITpI5S7gjlMgLGO1bD5YOCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMksJ58pXZGYcExXdSKtwDbIVyZEbencYPcTOc9hnxjzrQ48MDyK1QnmVBbu78tRZKI4jKaRdhXvZkKhfSM8lqt7oEcN1IU3pQYaeIOH%2FmKrhhkKvcM%2BOG32z3Y%2B%2FdnjJMSZnMMhuL9KbR8YpnZHx21zUemFGvCLKSD%2FpPdtORvnKqQkI9fvYBUA1bGRyK7adc5LoBzqwAoDjFS7IXFaxhlSJrij%2FQSWXPi8AClCWp%2FsR0jGBzW2HMPCwuLYLTCBJOOvN4dgS74Pke0WB1hMjQ6VNTLCNLnjhNamkmVNdANF8yZVfdVLnGUnT6LoBIyoX7czClLamyq1NwAVijc9m4ewrHou8e5KeA5MZWBEcNhgN29ae1vDWUVL9riKkcN3W3bTyLTRjt91ZFgxJComnSDba2JeNICOO7kw%2FGxhXjo1b60UqVvYzAxxvqvMYjFe5I68WDpaun4UY15emOHBeYbLh2ov4lP6%2B5mGGJ9X2M%2FFkri2Vc7LL9TOY4mRvtuMY5eYVQjc1mnGM9V%2FjGYgNLePw2lfQg9%2FVhUUhbL%2FBeqv2%2BIF%2B19T6%2FqWIwOorSvFLKjW%2ByhL6Ly%2FXqYd%2Brclu1gwS%2BDr5eY1asiBtDHVsGgmRzEkRvtt15CrqnECjgcnsTSNENq4Xg3HulLE8w1KDGyQY6pgH6Uw3qcguIIv0ZR34iI74czfr24qRvDP6ABI2g073W3UFVqjVyaocerXuapXOPMqdG5jJnsLbBNshvFNISjnw8tVd7jEHENmCWGtatMpN%2Bw2v8cuByOJ1AVr8GmYA7N7%2Fz1k%2FXxeFkMNRUIBgLxhexlEuV9uS2H4Q%2B11fiHm3%2FhVEL21h%2FuvN2PlJMWrLUOjxBHiWGwAil6ik%2FxWdtPPVz0zjFSBhO&X-Amz-Signature=03e394cf16d6b1f3767d61840833882b039bf07f808ef2fdfcec312aec42c828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22RVOFJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB%2Bf1vR4S225vaAgwau9brwGG%2B9ewUdaBiChY24z%2FprIAiARorbZkuehNE8NhB%2BCyqLdITpI5S7gjlMgLGO1bD5YOCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMksJ58pXZGYcExXdSKtwDbIVyZEbencYPcTOc9hnxjzrQ48MDyK1QnmVBbu78tRZKI4jKaRdhXvZkKhfSM8lqt7oEcN1IU3pQYaeIOH%2FmKrhhkKvcM%2BOG32z3Y%2B%2FdnjJMSZnMMhuL9KbR8YpnZHx21zUemFGvCLKSD%2FpPdtORvnKqQkI9fvYBUA1bGRyK7adc5LoBzqwAoDjFS7IXFaxhlSJrij%2FQSWXPi8AClCWp%2FsR0jGBzW2HMPCwuLYLTCBJOOvN4dgS74Pke0WB1hMjQ6VNTLCNLnjhNamkmVNdANF8yZVfdVLnGUnT6LoBIyoX7czClLamyq1NwAVijc9m4ewrHou8e5KeA5MZWBEcNhgN29ae1vDWUVL9riKkcN3W3bTyLTRjt91ZFgxJComnSDba2JeNICOO7kw%2FGxhXjo1b60UqVvYzAxxvqvMYjFe5I68WDpaun4UY15emOHBeYbLh2ov4lP6%2B5mGGJ9X2M%2FFkri2Vc7LL9TOY4mRvtuMY5eYVQjc1mnGM9V%2FjGYgNLePw2lfQg9%2FVhUUhbL%2FBeqv2%2BIF%2B19T6%2FqWIwOorSvFLKjW%2ByhL6Ly%2FXqYd%2Brclu1gwS%2BDr5eY1asiBtDHVsGgmRzEkRvtt15CrqnECjgcnsTSNENq4Xg3HulLE8w1KDGyQY6pgH6Uw3qcguIIv0ZR34iI74czfr24qRvDP6ABI2g073W3UFVqjVyaocerXuapXOPMqdG5jJnsLbBNshvFNISjnw8tVd7jEHENmCWGtatMpN%2Bw2v8cuByOJ1AVr8GmYA7N7%2Fz1k%2FXxeFkMNRUIBgLxhexlEuV9uS2H4Q%2B11fiHm3%2FhVEL21h%2FuvN2PlJMWrLUOjxBHiWGwAil6ik%2FxWdtPPVz0zjFSBhO&X-Amz-Signature=a1af0f250dc76c97be163f2c53511f27059ce2709f23a6977956cc48016cd30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

