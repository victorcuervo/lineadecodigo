---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7OS2YV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx%2FzxGSfPSJDMwv9DNAOc4RHITvSlGmQuyshwiVA91TQIhAKJtWGSlOMD2Q9G%2Fj3liYsZa9euRdVsZn62oBs2j%2FMmPKv8DCFoQABoMNjM3NDIzMTgzODA1IgwBh7VONvjk6duD1HEq3AMSbQjgU%2F7yj%2B%2F%2ByW2ElvlPBEE9EVkvYHfOuDs3o%2F8vT6npfSBmNF%2FpnAUvlx66usXp4u0M%2FHFtBy2THO%2FvQ%2BDvPvWemVr2ouJLem0Eb9dhUw3TzyKK7byTpzjMVv3n%2FBTB%2FK4cRSZzmwZTE0Wg0CYcP96wGg3zyntFsfdx2Nn1ofET60%2FnxrahKK5J7UXypxAiLhAVf1ufW3ZqV5x2KGsPiG%2BBkhYVcDzSSxuuCXRBgfQ05nPCGQf9e7t9cKjw5Dii6lBfdWXIfGS6fm%2FvWfTYytpErrbozSaeWVSKO1YpBsRDnydtUnnshHVNKSPVVCpYDn%2BvCzmR3PcWikvT21CLaDQA84lT%2BGx6dY7gaKr9bx1TYgVBBK5FpYilYiMv19mbYPJDrtBCnSIPBZ41Z1syoO%2BHSQU%2BS1xfac3y7PFBY33PegTEvRQQwSZwvKjAt2UAFhjeg15yFi1aCZa6YEIrkeUQ3tnCmNdog5%2FvqpxQNUBk0vrfzYQ9wGfdZ2yyQ7VMpOCJ%2FFy6f9AaVgRWum8EfFQQTEILXr6uu1Nr3OYGfBn3KhNsWJJaQ5Ea%2BEEFBnlDWxpYt1A5AOcwXCeLeYE9ERx6BchkcntLKg4p%2FaWV4pHpRHX27mP8FwFGhDC2w8rJBjqkASun3Wi%2B6C%2B1AlAKDakulPH4vPCH6iCgBXtDqWwR024gqVuQj4IoTVqP7zMzKCqOjUrLXbfDrOAEXeskjLliDUfymj%2BQZjHCTJS8HtI1xnfhKrERwn0QkdKymBTMCAxS%2Bo36HHqeq5e8rw33pdY3h%2FZmBhYfJ6kW39lUfMhtO6YrwdLwqqRc7Gnc05cfgK0f%2BZdjyOsh4yMThhf6jQjbyeJb4EPI&X-Amz-Signature=2ae68188188dd2bef2ac4737b44bf5e0489d95099d9ddd96fe62beedf6be3c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7OS2YV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx%2FzxGSfPSJDMwv9DNAOc4RHITvSlGmQuyshwiVA91TQIhAKJtWGSlOMD2Q9G%2Fj3liYsZa9euRdVsZn62oBs2j%2FMmPKv8DCFoQABoMNjM3NDIzMTgzODA1IgwBh7VONvjk6duD1HEq3AMSbQjgU%2F7yj%2B%2F%2ByW2ElvlPBEE9EVkvYHfOuDs3o%2F8vT6npfSBmNF%2FpnAUvlx66usXp4u0M%2FHFtBy2THO%2FvQ%2BDvPvWemVr2ouJLem0Eb9dhUw3TzyKK7byTpzjMVv3n%2FBTB%2FK4cRSZzmwZTE0Wg0CYcP96wGg3zyntFsfdx2Nn1ofET60%2FnxrahKK5J7UXypxAiLhAVf1ufW3ZqV5x2KGsPiG%2BBkhYVcDzSSxuuCXRBgfQ05nPCGQf9e7t9cKjw5Dii6lBfdWXIfGS6fm%2FvWfTYytpErrbozSaeWVSKO1YpBsRDnydtUnnshHVNKSPVVCpYDn%2BvCzmR3PcWikvT21CLaDQA84lT%2BGx6dY7gaKr9bx1TYgVBBK5FpYilYiMv19mbYPJDrtBCnSIPBZ41Z1syoO%2BHSQU%2BS1xfac3y7PFBY33PegTEvRQQwSZwvKjAt2UAFhjeg15yFi1aCZa6YEIrkeUQ3tnCmNdog5%2FvqpxQNUBk0vrfzYQ9wGfdZ2yyQ7VMpOCJ%2FFy6f9AaVgRWum8EfFQQTEILXr6uu1Nr3OYGfBn3KhNsWJJaQ5Ea%2BEEFBnlDWxpYt1A5AOcwXCeLeYE9ERx6BchkcntLKg4p%2FaWV4pHpRHX27mP8FwFGhDC2w8rJBjqkASun3Wi%2B6C%2B1AlAKDakulPH4vPCH6iCgBXtDqWwR024gqVuQj4IoTVqP7zMzKCqOjUrLXbfDrOAEXeskjLliDUfymj%2BQZjHCTJS8HtI1xnfhKrERwn0QkdKymBTMCAxS%2Bo36HHqeq5e8rw33pdY3h%2FZmBhYfJ6kW39lUfMhtO6YrwdLwqqRc7Gnc05cfgK0f%2BZdjyOsh4yMThhf6jQjbyeJb4EPI&X-Amz-Signature=444b33d9a8bd15ae5742b5e57cfc9956acc58ec8b71795ae85c7163e5dbf218b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

