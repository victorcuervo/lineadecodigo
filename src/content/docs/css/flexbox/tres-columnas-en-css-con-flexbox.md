---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBTQXCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVqiJ6eUfnIQzE9zT5JxxAl%2F7yF5q0IHF%2FNPUPf5hYfgIhAJou8JesIf7WhT4IxRzWw%2FD24KN35CRqNhPtV%2B3kHKHLKv8DCGAQABoMNjM3NDIzMTgzODA1IgyAmVYDmIs32t661Wgq3ANERQo2iK7o5Gfc9t1sKKKdMmBVdxefVeRbZ2nM5eWHiXDc%2FBPTyFMc36j3%2BPi3VNY4XlB0fgymYE2Ui6Yqj%2FBVySfASrUIa2i75eCEkp5YHg8BabrFMVKRn3oLqRPZGEh%2Fgl1Tk0%2BX76Q2sz94Zz5nvKWKTd4qQi7EQ5fUr3mIJlFc%2BziXeD8tlm%2FRElz5bOj1SI%2Fgw6N5rBF0Sqb4jPq4JNdQeqsGDKPckzMVEfQBwu2Da%2BqofdGl5X8ONpyT61gZiybDZKl7ZDsq5uPFOCXVPiZctlyChqY1pUEsoW3raVXvXVNWWhI6ndgJvmZHS9lS7FEbPAcYB11ei3T%2FvrzlsoZQg6J8gyPqw04V%2F%2FEyJZpOyL3ElYOwUa%2BzOZPRu3pugn6e1bsqtnoOxNVrb6x%2F4I2hNmJsAqaQBH7QqZ63xncr6E%2BC0cngqiguyBdWaU6yFpvKxziRmJNo1TDL7W4pVAL0zyngGVdEvZ3pylA21XgrZgx6n6NE%2FDWIiknNEiSQr47Af9Q61bLGoaY3Cxy7aGKjgx%2FLtckQjaPSel3MryHD2I7j6EeqCQVZV9WbJagdH6pYDD5qhYZMDkVGeM4iDrLeGlDbWpGkbqxXDi2gksBozPAtL5bwuCKkhTCg48vJBjqkAW2NmLOKv3O%2FALDWKbfWXTdX8Cqh5TGF19ZdgjC1o6r0q%2B09LhImUJYxI83Y4uxghQSAUcJ5Ue6pECO5n4hEy4Rt8NynIktTyAXcitu6NlVNdBWzJjeBxQmN1ug1LKQ6Bl1AZeFven77wio1Yu7jamnqPD%2BP1sIVgzIlZSI%2BTzvT%2Fyq9mZGWbKK2xrLhy4ThShcdcA3CG%2FkwYb0VNlnIV64JM3e2&X-Amz-Signature=98e22f4d91ad7800fa5ef099409add52621e6b59e9484c75a785dc7a57b97ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBTQXCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVqiJ6eUfnIQzE9zT5JxxAl%2F7yF5q0IHF%2FNPUPf5hYfgIhAJou8JesIf7WhT4IxRzWw%2FD24KN35CRqNhPtV%2B3kHKHLKv8DCGAQABoMNjM3NDIzMTgzODA1IgyAmVYDmIs32t661Wgq3ANERQo2iK7o5Gfc9t1sKKKdMmBVdxefVeRbZ2nM5eWHiXDc%2FBPTyFMc36j3%2BPi3VNY4XlB0fgymYE2Ui6Yqj%2FBVySfASrUIa2i75eCEkp5YHg8BabrFMVKRn3oLqRPZGEh%2Fgl1Tk0%2BX76Q2sz94Zz5nvKWKTd4qQi7EQ5fUr3mIJlFc%2BziXeD8tlm%2FRElz5bOj1SI%2Fgw6N5rBF0Sqb4jPq4JNdQeqsGDKPckzMVEfQBwu2Da%2BqofdGl5X8ONpyT61gZiybDZKl7ZDsq5uPFOCXVPiZctlyChqY1pUEsoW3raVXvXVNWWhI6ndgJvmZHS9lS7FEbPAcYB11ei3T%2FvrzlsoZQg6J8gyPqw04V%2F%2FEyJZpOyL3ElYOwUa%2BzOZPRu3pugn6e1bsqtnoOxNVrb6x%2F4I2hNmJsAqaQBH7QqZ63xncr6E%2BC0cngqiguyBdWaU6yFpvKxziRmJNo1TDL7W4pVAL0zyngGVdEvZ3pylA21XgrZgx6n6NE%2FDWIiknNEiSQr47Af9Q61bLGoaY3Cxy7aGKjgx%2FLtckQjaPSel3MryHD2I7j6EeqCQVZV9WbJagdH6pYDD5qhYZMDkVGeM4iDrLeGlDbWpGkbqxXDi2gksBozPAtL5bwuCKkhTCg48vJBjqkAW2NmLOKv3O%2FALDWKbfWXTdX8Cqh5TGF19ZdgjC1o6r0q%2B09LhImUJYxI83Y4uxghQSAUcJ5Ue6pECO5n4hEy4Rt8NynIktTyAXcitu6NlVNdBWzJjeBxQmN1ug1LKQ6Bl1AZeFven77wio1Yu7jamnqPD%2BP1sIVgzIlZSI%2BTzvT%2Fyq9mZGWbKK2xrLhy4ThShcdcA3CG%2FkwYb0VNlnIV64JM3e2&X-Amz-Signature=a3a7c607217ebe3259c43979512569f78eb375f40af5a8d76e4b4d331a9a0cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

