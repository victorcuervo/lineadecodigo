---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EO3Z7RK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEGcSmJMtMHlWvNB4rs54IXHcIksdnJAp5vvy75qVawuAiEAjge3ZM3VTv0znUr3caWHT90F9cjolRtpQtww%2BfqhGPoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNhG5wP%2BiPvNrNfJHyrcA8ZNCNS3PzIXCKSasyZzB0%2BE4I6Tomxl26HZun8QMSAucNPxX2WQO3%2F2Ru05XQODGcOsVHCIUa9FcPluWLCydyApz4%2BUx9ni2qlEZ%2Bo%2BXG0yT5mH0zV30q%2FRfN0EYKyoKb50Eq7mCZn18z8jfRArjASZp%2Bizx88Zxf%2FGFkMkyszCJWKjp0wvUl3VT7FHdUG9VbCI49Lo3R7kJs85fpbq%2BEVQg69CPg0QN%2BNJCBmNE%2Bv0MW0DBdXo8pkXNUi7PpR%2FIK5Du83CO4C2mAJLer0jdhutz6ERytDOZ0doAVhGCW0QWuig2R8NIasSy8q9NTxuZNblFqsXuSfg8wEczFVRUGyCj6EDN2Y%2BEgdKJ1jyRdelJWC74jc6J55inKEoZe2SVMujymz5lTfdGUZaCSoLT0Sb%2BW8QFb%2Bz%2BYm8pK3WAKvc%2B6HnyKVO02QSGH807tb%2BPGCPLmmP30jR8PsG62T7uIoEYJkFRw6IHDDk7jcN8zxcGdttNOb6TaVn%2FxUckyJR3oAhxQi9j4eI9lqmUb9duv7TSTP2KFvfJiWQKoEBsCMSEnPlZ7eMuni%2BJfqbeYXlQo810c%2Fc4lvZ2IuyQqL%2BRs6%2BCgSSEhI1emDSlneGxECYiAkHzx%2Fu2XWrQadiMMOUw8kGOqUBYuH66ShNaq8he%2BmKczCqS7VGlGpQCP2AEKGBZ%2BekLLAM7YBP7Rh3ZcabTxuO0gP7ks%2FW8YF2TdBJxt%2BDHMGmmpZO%2FgauUM0OyRv0jVgHEsuMPqPGXDkqTBbQX7A1EpBQXGKNPCXyaNLmG%2BXIy6rQE5hZ3%2BOIeVVhaKEKUYG4cIimwKK9iLP3XzDQPLE9%2FWIdXJyY0gC0WY%2BWjGcIDUBmtNT6zJ%2Bz&X-Amz-Signature=ef961d4cd44cff4bd50b0533688ee6de384a9cceea0d14b688a3789a3a5c90fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EO3Z7RK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEGcSmJMtMHlWvNB4rs54IXHcIksdnJAp5vvy75qVawuAiEAjge3ZM3VTv0znUr3caWHT90F9cjolRtpQtww%2BfqhGPoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNhG5wP%2BiPvNrNfJHyrcA8ZNCNS3PzIXCKSasyZzB0%2BE4I6Tomxl26HZun8QMSAucNPxX2WQO3%2F2Ru05XQODGcOsVHCIUa9FcPluWLCydyApz4%2BUx9ni2qlEZ%2Bo%2BXG0yT5mH0zV30q%2FRfN0EYKyoKb50Eq7mCZn18z8jfRArjASZp%2Bizx88Zxf%2FGFkMkyszCJWKjp0wvUl3VT7FHdUG9VbCI49Lo3R7kJs85fpbq%2BEVQg69CPg0QN%2BNJCBmNE%2Bv0MW0DBdXo8pkXNUi7PpR%2FIK5Du83CO4C2mAJLer0jdhutz6ERytDOZ0doAVhGCW0QWuig2R8NIasSy8q9NTxuZNblFqsXuSfg8wEczFVRUGyCj6EDN2Y%2BEgdKJ1jyRdelJWC74jc6J55inKEoZe2SVMujymz5lTfdGUZaCSoLT0Sb%2BW8QFb%2Bz%2BYm8pK3WAKvc%2B6HnyKVO02QSGH807tb%2BPGCPLmmP30jR8PsG62T7uIoEYJkFRw6IHDDk7jcN8zxcGdttNOb6TaVn%2FxUckyJR3oAhxQi9j4eI9lqmUb9duv7TSTP2KFvfJiWQKoEBsCMSEnPlZ7eMuni%2BJfqbeYXlQo810c%2Fc4lvZ2IuyQqL%2BRs6%2BCgSSEhI1emDSlneGxECYiAkHzx%2Fu2XWrQadiMMOUw8kGOqUBYuH66ShNaq8he%2BmKczCqS7VGlGpQCP2AEKGBZ%2BekLLAM7YBP7Rh3ZcabTxuO0gP7ks%2FW8YF2TdBJxt%2BDHMGmmpZO%2FgauUM0OyRv0jVgHEsuMPqPGXDkqTBbQX7A1EpBQXGKNPCXyaNLmG%2BXIy6rQE5hZ3%2BOIeVVhaKEKUYG4cIimwKK9iLP3XzDQPLE9%2FWIdXJyY0gC0WY%2BWjGcIDUBmtNT6zJ%2Bz&X-Amz-Signature=3b3ca2305d228a1f69cf1d6954be861dea56b351cac50837521a710c4dcc38b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

