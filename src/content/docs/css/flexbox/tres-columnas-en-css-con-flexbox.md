---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5IZAA7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCnuk34z1CJ2P8V0pRO0BE6sTifmOLwgpz1LvcWEKWL5AIhAO03nTuSX9UczQtL%2FSL3JxscPfPL15WA9kXTf63JvFqBKv8DCDwQABoMNjM3NDIzMTgzODA1IgzEU2hDomlwe3Y3tqcq3ANMCajqd5sA9lOD85flzulnuAWqpbdntIa%2B5usrqQpuC24GFLXnNCPxia0B2mWZurOZA5XziB5h09CtRKLrLEsSwwgMoAM%2FBcei8RmqRXk%2BSlKNPuKn%2Bf9DaInPHs7cJ%2Bal3XGLOXGHi1MCLCLIzS4wefnp3iLy%2FroBlkoFXkbOVyyBumDLagmk9dBhicWeILdN6hvaTZlNX2tO4bq8XY%2FpbYxOD4Yigxqme6sa3jofBIRazIl9uZJISYsL7KxIEF7e2Xs5BzhxehLIRmP1h368%2BEYHI4Orr%2FA%2Fmls94FadnLukTQVamfENEqh5N9Ij6Jbn9h%2FEJM6h6QNQYs%2FmXMmEr2sTtpyeRIEfBqWJLsaE7kqmKbVz55a0lXEqmptYA322vMbQKVzLQA%2F%2BbO%2FpIcWSAzbzZyRAVgiU7x55F8TklMYHRNXAoS6fM10xZtE%2BQ4pCDYPJIMJcWY2P2hAex%2B2Jhi6zeWHu6Vrlm2XTq2YKCG5ssEcEyiAdGvL%2FEzCzE8x6Qud9Tt9qyi41yFadPyD3nLbIy7A%2FlzwcrcqrGYwxOmRN33m6rjkoS6VTzU7gbClqCWv14N1sAkgx1K0NJimc4GmQiKetkJ4NlPAa3SwXfbf%2F0LS68wWsl%2BM8tDDa8sPJBjqkAYL2ML7KdcMLBf84r2TXCgXNQ0YBdIMbDrFEHAO4mblRxwjBWh2C3pMW7%2Fg8Oxi7vHRDj%2FrvG%2BSMOdAaiMnau2doZOVMzCcqjpSjpMGwMU%2BLARzJb%2BMHTHegUYB5Jj2NPbIF2qwjGahz6C9Ezyf9xRzocnSiXc2E%2FRW%2FEb9wJjoUkbGuXLY1IxQoK5iiH6uW6Spszb5tx9oBZ5w01Zl4S8Ul5CvX&X-Amz-Signature=d13fd5b513765e92aa96f0bd6126725d1eaea55bebec5ee14341dbf249067d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5IZAA7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCnuk34z1CJ2P8V0pRO0BE6sTifmOLwgpz1LvcWEKWL5AIhAO03nTuSX9UczQtL%2FSL3JxscPfPL15WA9kXTf63JvFqBKv8DCDwQABoMNjM3NDIzMTgzODA1IgzEU2hDomlwe3Y3tqcq3ANMCajqd5sA9lOD85flzulnuAWqpbdntIa%2B5usrqQpuC24GFLXnNCPxia0B2mWZurOZA5XziB5h09CtRKLrLEsSwwgMoAM%2FBcei8RmqRXk%2BSlKNPuKn%2Bf9DaInPHs7cJ%2Bal3XGLOXGHi1MCLCLIzS4wefnp3iLy%2FroBlkoFXkbOVyyBumDLagmk9dBhicWeILdN6hvaTZlNX2tO4bq8XY%2FpbYxOD4Yigxqme6sa3jofBIRazIl9uZJISYsL7KxIEF7e2Xs5BzhxehLIRmP1h368%2BEYHI4Orr%2FA%2Fmls94FadnLukTQVamfENEqh5N9Ij6Jbn9h%2FEJM6h6QNQYs%2FmXMmEr2sTtpyeRIEfBqWJLsaE7kqmKbVz55a0lXEqmptYA322vMbQKVzLQA%2F%2BbO%2FpIcWSAzbzZyRAVgiU7x55F8TklMYHRNXAoS6fM10xZtE%2BQ4pCDYPJIMJcWY2P2hAex%2B2Jhi6zeWHu6Vrlm2XTq2YKCG5ssEcEyiAdGvL%2FEzCzE8x6Qud9Tt9qyi41yFadPyD3nLbIy7A%2FlzwcrcqrGYwxOmRN33m6rjkoS6VTzU7gbClqCWv14N1sAkgx1K0NJimc4GmQiKetkJ4NlPAa3SwXfbf%2F0LS68wWsl%2BM8tDDa8sPJBjqkAYL2ML7KdcMLBf84r2TXCgXNQ0YBdIMbDrFEHAO4mblRxwjBWh2C3pMW7%2Fg8Oxi7vHRDj%2FrvG%2BSMOdAaiMnau2doZOVMzCcqjpSjpMGwMU%2BLARzJb%2BMHTHegUYB5Jj2NPbIF2qwjGahz6C9Ezyf9xRzocnSiXc2E%2FRW%2FEb9wJjoUkbGuXLY1IxQoK5iiH6uW6Spszb5tx9oBZ5w01Zl4S8Ul5CvX&X-Amz-Signature=51718cc6a75968359ec10b01e6ba8771d48325e87dc2bc5d50371508d952c628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

