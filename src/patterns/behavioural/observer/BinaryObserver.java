package patterns.behavioural.observer;

/**
 *	3. Observadores concretos que extiende la clase observador
 *	abstracta la cual tiene un constructor que toma como argumento
 *	un sujeto y lo agrega al sujeto. Tambien contiene la implementacion
 *	del metodo de actualizacion de la clase abstracta  
 */
public class BinaryObserver extends Observer {

   public BinaryObserver(Subject subject){
      this.subject = subject;
      this.subject.attach(this);
   }

   @Override
   public void update() {
      System.out.println( "Binary String: " + Integer.toBinaryString( subject.getState() ) ); 
   }
}